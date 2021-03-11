package it.units.api;

import it.units.entities.storage.Attore;
import it.units.entities.storage.Files;
import it.units.entities.support.SupportFileUpload;
import it.units.persistance.AttoreHelper;
import it.units.persistance.FilesHelper;
import it.units.utils.FixedVariables;
import it.units.utils.JWTAssistant;
import it.units.utils.MailAssistant;
import it.units.utils.UtilsRest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.util.UUID;

@Path("/files")
public class FilesManager {

    @Context
    private HttpServletRequest request;
    @Context
    private HttpServletResponse response;

    @GET
    @Path("/download/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response downloadFile(@PathParam("id") String id) {
        try {
            Files fileDaScaricare = FilesHelper.getById(Files.class, id);

            if (fileDaScaricare == null || fileDaScaricare.getFile() == null)
                throw new IOException("Il file richiesto non è presente nel database");

            if (fileDaScaricare.getDataVisualizzazione().equals("")) {
                String dataVisualizzazione = UtilsRest.getDataString();
                fileDaScaricare.setDataVisualizzazione(dataVisualizzazione);
                fileDaScaricare.setIndirizzoIP(request.getRemoteAddr());

                FilesHelper.saveNow(fileDaScaricare);
            }

            Response.ResponseBuilder responseBuilder = Response.ok(fileDaScaricare.getFile(), MediaType.APPLICATION_OCTET_STREAM_TYPE);
            responseBuilder.header("Content-Disposition",
                    "attachment; filename=\"" + fileDaScaricare.getName() + "\"");
            return responseBuilder.build();
        } catch (Exception e) {
            System.out.println(e.getMessage() + "\n");
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }


    @POST
    @Path("/upload")
    @Consumes(MediaType.APPLICATION_JSON)
    public String uploadFile(SupportFileUpload supportFileUpload) {
        try {
            //TODO: valutare se tenere l'entità di supporto
            //TODO: aggiungere dati per il resoconto (creare entità resoconto così da mantenere le info relative agli upload anche se si cancellano i file)

            String usernameUpl = JWTAssistant.getUsernameFromJWT(JWTAssistant.getTokenJWTFromRequest(request));
            supportFileUpload.setUsernameUpl(usernameUpl);
            supportFileUpload.setDataCaricamento(UtilsRest.getDataString());

            Attore attore = AttoreHelper.getById(Attore.class, supportFileUpload.getUsernameCons());

            if (attore == null) {

                if (UtilsRest.isSyntaxUsernameWrong(supportFileUpload.getUsernameCons(), FixedVariables.CONSUMER))
                    throw new Exception("Username per il consumer non conforme alle regole.");

                if (supportFileUpload.getEmailCons().equals("") || supportFileUpload.getNameCons().equals(""))
                    throw new Exception("Informazioni mancanti per la creazione del nuovo username");

                String passwordProvvisoria = UUID.randomUUID().toString();
                Attore nuovoConsumer = new Attore(supportFileUpload.getUsernameCons(), passwordProvvisoria,
                        supportFileUpload.getNameCons(), supportFileUpload.getEmailCons(), FixedVariables.CONSUMER, "");
                AttoreHelper.saveDelayed(nuovoConsumer, true);

                String mailCreazioneAttore = MailAssistant.sendMailCreazioneAttore(nuovoConsumer, passwordProvvisoria, usernameUpl);
                if (mailCreazioneAttore.contains("ERR"))
                    throw new Exception(mailCreazioneAttore);
                if (FixedVariables.debug)
                    System.out.println(mailCreazioneAttore);

            } else {
                supportFileUpload.setNameCons(attore.getName());
                supportFileUpload.setEmailCons(attore.getEmail());
            }

            Files newFile = new Files(supportFileUpload.getUsernameUpl(), supportFileUpload.getUsernameCons(), supportFileUpload.getFile(),
                    supportFileUpload.getNameFile(), supportFileUpload.getDataCaricamento(), supportFileUpload.getHashtag());
            FilesHelper.saveDelayed(newFile);

            String mailNotifica = MailAssistant.sendNotifica(supportFileUpload, usernameUpl, newFile.getId());
            if (mailNotifica.contains("ERR"))
                throw new Exception(mailNotifica);
            if (FixedVariables.debug)
                System.out.println(mailNotifica);

            return "Upload file completato.";

        } catch (Exception e) {
            System.out.println(e.getMessage() + "\n");
            return "ERR - " + e.getMessage();
        }
    }


    @Path("/delete/{fileId}")
    @DELETE
    @Consumes(MediaType.APPLICATION_JSON)
    public String deleteFile(@PathParam("fileId") String fileId) {
        try {
            //TODO: mettere il controllo: deve essere lo stesso uploader che l'ha caricato!!
            Files file = FilesHelper.getById(Files.class, fileId);
            if (file == null || file.getFile() == null)
                throw new Exception("File da eliminare inesistente!");
            file.setFile(null);
            FilesHelper.saveDelayed(file);
            return "delete file " + fileId + " completed";
        } catch (Exception e) {
            System.out.println(e.getMessage() + "\n");
            return "ERR - " + e.getMessage();
        }
    }


}