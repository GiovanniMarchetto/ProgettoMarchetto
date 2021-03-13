package it.units.api;

import it.units.entities.storage.Attore;
import it.units.entities.storage.Files;
import it.units.entities.support.SupportFileUpload;
import it.units.persistance.AttoreHelper;
import it.units.persistance.FilesHelper;
import it.units.utils.*;

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
            return Response.status(Response.Status.NOT_FOUND).entity("ERR - " + e.getMessage()).build();
        }
    }


    @POST
    @Path("/upload")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response uploadFile(SupportFileUpload supportFileUpload) {
        try {
            String usernameUpl = JWTAssistant.getUsernameFromJWT(JWTAssistant.getTokenJWTFromRequest(request));
            supportFileUpload.setUsernameUpl(usernameUpl);
            supportFileUpload.setDataCaricamento(UtilsRest.getDataString());

            Attore attore = AttoreHelper.getById(Attore.class, supportFileUpload.getUsernameCons());

            if (attore == null) {

                if (UtilsRest.isSyntaxUsernameWrong(supportFileUpload.getUsernameCons(), FixedVariables.CONSUMER))
                    throw new MyException("Username per il consumer non conforme alle regole.");

                if (supportFileUpload.getEmailCons().equals("") || supportFileUpload.getNameCons().equals(""))
                    throw new MyException("Informazioni mancanti per la creazione del nuovo username");

                String passwordProvvisoria = UUID.randomUUID().toString();
                Attore nuovoConsumer = new Attore(supportFileUpload.getUsernameCons(), passwordProvvisoria,
                        supportFileUpload.getNameCons(), supportFileUpload.getEmailCons(), FixedVariables.CONSUMER, "");
                AttoreHelper.saveDelayed(nuovoConsumer, true);

                String mailCreazioneAttore = MailAssistant.sendMailCreazioneAttore(nuovoConsumer, passwordProvvisoria, usernameUpl);
                if (mailCreazioneAttore.contains("ERR"))
                    throw new MyException(mailCreazioneAttore);
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
                throw new MyException(mailNotifica);
            if (FixedVariables.debug)
                System.out.println(mailNotifica);


            return Response
                    .status(Response.Status.OK)
                    .entity("Upload file completato.")
                    .build();

        } catch (MyException e) {
            if (FixedVariables.debug) System.out.println(e.getMessage() + "\n");
            return Response.status(Response.Status.BAD_REQUEST).entity("ERR - " + e.getMessage()).build();
        }
    }


    @Path("/delete/{fileId}")
    @DELETE
    @Consumes(MediaType.APPLICATION_JSON)
    public Response deleteFile(@PathParam("fileId") String fileId) {
        try {
            Files file = FilesHelper.getById(Files.class, fileId);
            if (file == null || file.getFile() == null)
                throw new MyException("File da eliminare inesistente!");

            String token = JWTAssistant.getTokenJWTFromRequest(request);
            String usernameFromJWT = JWTAssistant.getUsernameFromJWT(token);
            if (!file.getUsernameUpl().equals(usernameFromJWT))
                throw new MyException("Lo può cancellare direttamente solo lo stesso uploader che lo ha caricato");

            file.setFile(null);
            FilesHelper.saveDelayed(file);
            return Response
                    .status(Response.Status.OK)
                    .entity("delete file " + fileId + " completed")
                    .build();
        } catch (MyException e) {
            if (FixedVariables.debug) System.out.println(e.getMessage() + "\n");
            return Response.status(Response.Status.NOT_FOUND).entity("ERR - " + e.getMessage()).build();
        }
    }


}