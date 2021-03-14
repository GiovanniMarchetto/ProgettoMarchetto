package it.units.api;

import it.units.assistants.ListAssistant;
import it.units.entities.proxies.AttoreInfo;
import it.units.entities.proxies.FilesInfo;
import it.units.entities.storage.Attore;
import it.units.entities.support.FromTo;
import it.units.entities.support.ResumeForAdmin;
import it.units.persistance.AttoreHelper;
import it.units.utils.FixedVariables;
import it.units.assistants.JWTAssistant;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.GenericEntity;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Path("/list")
public class ListManager {

    @Context
    private HttpServletRequest request;
    @Context
    private HttpServletResponse response;

/*
* https://stackoverflow.com/questions/47327162/messagebodywriter-not-found-for-media-type-application-xml
* The idea of GenericEntity
* */
    //---------CONSUMER-PAGE----------
    @GET
    @Path("/uploaders")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getUploadersWithDocumentsForTheConsumer() {
        try {
            List<Attore> uploadersList = new ArrayList<>();
            String token = JWTAssistant.getTokenJWTFromRequest(request);
            String consumer = JWTAssistant.getUsernameFromJWT(token);
            List<FilesInfo> filesConsumer = ListAssistant.listaInfoFilesConsumer(consumer);
            for (FilesInfo f : filesConsumer) {
                Attore a = AttoreHelper.getById(Attore.class, f.getUsernameUpl());
                if (!uploadersList.contains(a))
                    uploadersList.add(a);
            }
            return Response
                    .status(Response.Status.OK)
                    .entity(new GenericEntity<List<AttoreInfo>> (ListAssistant.getAttoreInfoList(uploadersList)) {})
                    .build();
        } catch (Exception e) {
            if (FixedVariables.debug) System.out.println(e.getMessage() + "\n");
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GET
    @Path("/filesConsumer")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getFilesConsumer() {
        try {
            String token = JWTAssistant.getTokenJWTFromRequest(request);
            String consumer = JWTAssistant.getUsernameFromJWT(token);
            return Response
                    .status(Response.Status.OK)
                    .entity(new GenericEntity<List<FilesInfo>> (ListAssistant.listaInfoFilesConsumer(consumer)) {})
                    .build();
        } catch (Exception e) {
            if (FixedVariables.debug) System.out.println(e.getMessage() + "\n");
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }
//---------END CONSUMER-PAGE----------


    //---------UPLOADER-PAGE----------
    @GET
    @Path("/consumers")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getConsumers() {
        try {
            return Response
                    .status(Response.Status.OK)
                    .entity(new GenericEntity<List<AttoreInfo>> (ListAssistant.ListaInfoAttoriRuolo(FixedVariables.CONSUMER)) {})
                    .build();
        } catch (Exception e) {
            if (FixedVariables.debug) System.out.println(e.getMessage() + "\n");
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GET
    @Path("/filesUploader")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getFilesUploader() {
        try {
            String token = JWTAssistant.getTokenJWTFromRequest(request);
            String uploader = JWTAssistant.getUsernameFromJWT(token);
            return Response
                    .status(Response.Status.OK)
                    .entity(new GenericEntity<List<FilesInfo>> (ListAssistant.listaInfoFilesUploader(uploader)) {})
                    .build();
        } catch (Exception e) {
            if (FixedVariables.debug) System.out.println(e.getMessage() + "\n");
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }
//---------END UPLOADER-PAGE----------


    //---------ADMINISTRATOR-PAGE----------
    @POST
    @Path("/resumeForAdmin")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response getFilesAll(FromTo date) {
        try {
            Date fromDate = new SimpleDateFormat("yyyy-MM-dd").parse(date.getFrom());
            Date toDate = new SimpleDateFormat("yyyy-MM-dd").parse(date.getTo());

            List<AttoreInfo> uploaders = ListAssistant.ListaInfoAttoriRuolo(FixedVariables.UPLOADER);
            List<FilesInfo> allFiles = ListAssistant.listaInfoFilesCompleta();

            List<ResumeForAdmin> resoconto = new ArrayList<>();
            if (FixedVariables.debug)
                System.out.println("-----------RESOCONTO--------------");

            for (AttoreInfo upl : uploaders) {
                ArrayList<String> consDiversi = new ArrayList<>();

                if (FixedVariables.debug)
                    System.out.println("USERNAME " + upl.getUsername());

                Iterator<FilesInfo> i = allFiles.iterator();
                AtomicInteger numDocCaricati = new AtomicInteger();
                while (i.hasNext()) {
                    FilesInfo file = i.next();
                    if (upl.getUsername().equals(file.getUsernameUpl())) {
                        Date docDate = new SimpleDateFormat("yyyy-MM-dd").parse(file.getDataCaricamento().substring(0, 10));

                        if ((docDate.after(fromDate) || docDate.equals(fromDate)) && docDate.before(toDate)) {
                            numDocCaricati.getAndIncrement();
                            if (!consDiversi.contains(file.getUsernameCons())) {
                                consDiversi.add(file.getUsernameCons());
                            }
                        }
                        i.remove();
                    }
                }
                if (FixedVariables.debug) {
                    System.out.println("End for " + upl.getUsername() + " - " + numDocCaricati.get() + " - " + consDiversi.size());
                    System.out.println("File rimasti: " + allFiles.size());
                }
                resoconto.add(new ResumeForAdmin(upl.getUsername(), upl.getName(), upl.getEmail(), numDocCaricati.get(), consDiversi.size()));
            }

            return Response
                    .status(Response.Status.OK)
                    .entity(new GenericEntity<List<ResumeForAdmin>> (resoconto) {})
                    .build();
        } catch (Exception e) {
            if (FixedVariables.debug) System.out.println(e.getMessage() + "\n");
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GET
    @Path("/administrators")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAdministrators() {
        try {
            return Response
                    .status(Response.Status.OK)
                    .entity(new GenericEntity<List<AttoreInfo>> (ListAssistant.ListaInfoAttoriRuolo(FixedVariables.ADMINISTRATOR)) {})
                    .build();
        } catch (Exception e) {
            if (FixedVariables.debug) System.out.println(e.getMessage() + "\n");
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }
//---------END ADMINISTRATOR-PAGE----------

}
