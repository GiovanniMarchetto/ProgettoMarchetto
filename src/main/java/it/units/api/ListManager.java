package it.units.api;

import it.units.entities.proxies.AttoreInfo;
import it.units.entities.proxies.FilesInfo;
import it.units.entities.storage.Attore;
import it.units.entities.support.FromTo;
import it.units.entities.support.ResumeForAdmin;
import it.units.persistance.AttoreHelper;
import it.units.persistance.FilesHelper;
import it.units.utils.FixedVariables;
import it.units.utils.JWTAssistant;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;

@Path("/list")
public class ListManager {

    @Context
    private HttpServletRequest request;
    @Context
    private HttpServletResponse response;


    //---------CONSUMER-PAGE----------
    @GET
    @Path("/uploaders")
    @Produces(MediaType.APPLICATION_JSON)
    public List<AttoreInfo> getUploadersWithDocumentsForTheConsumer() {
        List<AttoreInfo> listUploaders = new ArrayList<>();
        List<FilesInfo> filesConsumer = getFilesConsumer();
        for (FilesInfo f : filesConsumer) {
            AttoreInfo a = new AttoreInfo(Objects.requireNonNull(AttoreHelper.getById(Attore.class, f.getUsernameUpl())));
            if (!listUploaders.contains(a))
                listUploaders.add(a);
        }
        return listUploaders;
    }

    @GET
    @Path("/filesConsumer")
    @Produces(MediaType.APPLICATION_JSON)
    public List<FilesInfo> getFilesConsumer() {
        String token = JWTAssistant.getTokenJWTFromRequest(request);
        String consumer = JWTAssistant.getUsernameFromJWT(token);
        return FilesHelper.listaInfoFilesConsumer(consumer);
    }
//---------END CONSUMER-PAGE----------


    //---------UPLOADER-PAGE----------
    @GET
    @Path("/consumers")
    @Produces(MediaType.APPLICATION_JSON)
    public List<AttoreInfo> getConsumers() {
        return AttoreHelper.ListaAttoriRuolo(FixedVariables.CONSUMER);
    }

    @GET
    @Path("/filesUploader")
    @Produces(MediaType.APPLICATION_JSON)
    public List<FilesInfo> getFilesUploader() {
        String token = JWTAssistant.getTokenJWTFromRequest(request);
        String uploader = JWTAssistant.getUsernameFromJWT(token);
        return FilesHelper.listaInfoFilesUploader(uploader);
    }
//---------END UPLOADER-PAGE----------


    //---------ADMINISTRATOR-PAGE----------
    @POST
    @Path("/resumeForAdmin")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public List<ResumeForAdmin> getFilesAll(FromTo date) {
        try {
            Date fromDate = new SimpleDateFormat("yyyy-MM-dd").parse(date.getFrom());
            Date toDate = new SimpleDateFormat("yyyy-MM-dd").parse(date.getTo());

            List<AttoreInfo> uploaders = AttoreHelper.ListaAttoriRuolo(FixedVariables.UPLOADER);
            List<FilesInfo> allFiles = FilesHelper.listaInfoFilesCompleta();

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
            return resoconto;
        } catch (Exception e) {
            System.out.println(e.getMessage() + "\n" + "Localizzazione: " + e.getLocalizedMessage() + "\n");
            return null;
        }
    }
//---------END ADMINISTRATOR-PAGE----------

}
