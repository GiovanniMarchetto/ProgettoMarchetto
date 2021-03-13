package it.units.api;

import it.units.entities.storage.Attore;
import it.units.entities.storage.Files;
import it.units.persistance.AttoreHelper;
import it.units.persistance.FilesHelper;
import it.units.utils.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;

@Path("/attori")
public class AttoriManager {

    @Context
    public HttpServletRequest request;
    @Context
    public HttpServletResponse response;

    //TODO:  valuta se mettere put al posto del POST
    @POST
    @Path("/registration")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response registration(Attore attore) {
        try {
            if (FixedVariables.debug)
                UtilsRest.stampaDatiPassati(attore, "registration");

            if (!attore.getRole().equals(FixedVariables.CONSUMER)) {
                if (!FilterAssistant.filtroPerRuolo(request, FixedVariables.ADMINISTRATOR, true))
                    throw new MyException("Solo gli administrator possono registrare questo tipo di utenti");
            }

            if (AttoreHelper.getById(Attore.class, attore.getUsername()) != null)
                throw new MyException("Username già esistente");

            if (UtilsRest.isSyntaxUsernameWrong(attore.getUsername(), attore.getRole()))
                throw new MyException("Username non conforme alle regole.");

            if (!attore.getRole().equals(FixedVariables.UPLOADER))
                attore.setLogo("");

            AttoreHelper.saveDelayed(attore, true);

            if (FixedVariables.debug)
                System.out.println("REGISTRAZIONE EFFETTUATA --> " + attore.getUsername());

            return Response
                    .status(Response.Status.OK)
                    .entity("Registrazione eseguita - " + attore.getUsername())
                    .build();
        } catch (MyException e) {
            if (FixedVariables.debug) System.out.println(e.getMessage() + "\n");
            return Response
                    .status(Response.Status.BAD_REQUEST)
                    .entity("ERR - " + e.getMessage())
                    .build();
        }
    }

    @POST
    @Path("/modInfo")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response modificaInformazioni(Attore attoreModificato) {
        try {
            if (FixedVariables.debug)
                UtilsRest.stampaDatiPassati(attoreModificato, "modifica attore");

            if (!FilterAssistant.filtroPerRuolo(request, "modifica informazioni", false))
                throw new MyException("Token non disponibile, non puoi modificare");

            String token = JWTAssistant.getTokenJWTFromRequest(request);
            String usernameAttoreLoggato = JWTAssistant.getUsernameFromJWT(token);
            String ruoloAttoreLoggato = JWTAssistant.getRoleFromJWT(token);
            String usernameAttoreModifica = attoreModificato.getUsername().equals("") ? usernameAttoreLoggato : attoreModificato.getUsername();
            String ruoloAttoreModifica = attoreModificato.getRole();

            Attore attoreDatabase = AttoreHelper.getById(Attore.class, usernameAttoreModifica);
            if (attoreDatabase == null || !ruoloAttoreModifica.equals(attoreDatabase.getRole()))
                throw new MyException("Username da modificare inesistente");

            if (!(usernameAttoreLoggato.equals(usernameAttoreModifica))) {
                switch (ruoloAttoreLoggato) {
                    case FixedVariables.CONSUMER:
                        throw new MyException("Un consumer può modificare solo sè stesso");
                    case FixedVariables.UPLOADER:
                        if (!ruoloAttoreModifica.equals(FixedVariables.CONSUMER))
                            throw new MyException("Un uploader può modificare solo sè stesso o un consumer");
                        break;
                    case FixedVariables.ADMINISTRATOR:
                        if (ruoloAttoreModifica.equals(FixedVariables.CONSUMER))
                            throw new MyException("Un amministratore non può modificare i consumer");
                        break;
                    default:
                        throw new MyException("Non c'è il ruolo da modificare!!!");
                }
            }

            AtomicBoolean modifiche = new AtomicBoolean(false);
            AtomicBoolean modifichePassword = new AtomicBoolean(false);

            if (!attoreModificato.getName().equals("")
                    && !attoreDatabase.getName().equals(attoreModificato.getName())) {
                attoreDatabase.setName(attoreModificato.getName());
                modifiche.set(true);
            }
            if (!attoreModificato.getEmail().equals("")
                    && !attoreDatabase.getEmail().equals(attoreModificato.getEmail())) {
                attoreDatabase.setEmail(attoreModificato.getEmail());
                modifiche.set(true);
            }
            if (ruoloAttoreModifica.equals(FixedVariables.UPLOADER)
                    && !attoreModificato.getLogo().equals("")
                    && !attoreDatabase.getLogo().equals(attoreModificato.getLogo())) {
                attoreDatabase.setLogo(attoreModificato.getLogo());
                modifiche.set(true);
            }
            if (!attoreModificato.getPassword().equals("")
                    && !PasswordAssistant.verifyPassword(attoreModificato.getPassword(), attoreDatabase.getPassword(), attoreDatabase.getSalt())) {
                attoreDatabase.setPassword(attoreModificato.getPassword());
                modifiche.set(true);
                modifichePassword.set(true);
            }

            if (modifiche.get()) {
                AttoreHelper.saveNow(attoreModificato, modifichePassword.get());
                return Response
                        .status(Response.Status.OK)
                        .entity("Modifica attore eseguita - " + usernameAttoreModifica)
                        .build();
            } else {
                return Response
                        .status(Response.Status.OK)
                        .entity("WARN Nessun dato da modificare immesso")
                        .build();
            }
        } catch (MyException e) {
            if (FixedVariables.debug) System.out.println(e.getMessage() + "\n");
            return Response
                    .status(Response.Status.BAD_REQUEST)
                    .entity("ERR - " + e.getMessage())
                    .build();
        }
    }

    @DELETE
    @Path("/delete/{username}")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response deleteActor(@PathParam("username") String username) {
        try {
            Attore attoreDaEliminare = AttoreHelper.getById(Attore.class, username);

            if (attoreDaEliminare == null)
                throw new MyException("Username inesistente");

            //TODO: modificare logica (anche se va bene)
            if (attoreDaEliminare.getRole().equals(FixedVariables.CONSUMER)) {
                if (!FilterAssistant.filtroPerRuolo(request, FixedVariables.UPLOADER, true))
                    throw new MyException("Solo gli uploader possono eliminare i consumer");
            } else {
                if (!FilterAssistant.filtroPerRuolo(request, FixedVariables.ADMINISTRATOR, true))
                    throw new MyException("Solo gli administrator possono eliminare amministratori e uploader");

                String usernameLogged = JWTAssistant.getUsernameFromJWT(JWTAssistant.getTokenJWTFromRequest(request));
                if (attoreDaEliminare.getUsername().equals(usernameLogged))
                    throw new MyException("Un administrator non può eliminare sè stesso!!!");
            }

            AttoreHelper.deleteEntity(attoreDaEliminare);
            switch (attoreDaEliminare.getRole()) {
                case FixedVariables.UPLOADER:
                    List<Files> listaFilesUploaderEliminato = FilesHelper.listaFilesUploader(attoreDaEliminare.getUsername());
                    listaFilesUploaderEliminato.forEach(FilesHelper::deleteEntity);
                    break;
                case FixedVariables.CONSUMER:
                    List<Files> listaFilesConsumerEliminato = FilesHelper.listaFilesConsumer(attoreDaEliminare.getUsername());
                    for (Files fileDaEliminare : listaFilesConsumerEliminato) {
                        fileDaEliminare.setFile(null);
                        FilesHelper.saveNow(fileDaEliminare);
                    }
                    break;
                default:
                    break;
            }

            return Response
                    .status(Response.Status.OK)
                    .entity("Delete actor " + username + " completed")
                    .build();
        } catch (MyException e) {
            if (FixedVariables.debug) System.out.println(e.getMessage() + "\n");
            return Response
                    .status(Response.Status.BAD_REQUEST)
                    .entity("ERR - " + e.getMessage())
                    .build();
        }
    }

}
