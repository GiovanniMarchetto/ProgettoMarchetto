package it.units.persistance;


import it.units.entities.proxies.FilesInfo;
import it.units.entities.storage.Files;
import it.units.utils.SortByDataCaricamento;

import java.util.ArrayList;
import java.util.List;

import static com.googlecode.objectify.ObjectifyService.ofy;

public class FilesHelper extends AbstractHelper {

    public static List<FilesInfo> listaInfoFilesDatabase() {
        List<Files> filesList = ofy().load().type(Files.class).list();
        return getFilesInfos(filesList);
    }



    public static List<FilesInfo> listaInfoFilesEliminati() {
        return ofy().load().type(FilesInfo.class).list();
    }

    public static List<FilesInfo> listaInfoFilesCompleta() {
        List<FilesInfo> listaCompleta = listaInfoFilesDatabase();
        listaCompleta.addAll(listaInfoFilesEliminati());
        return listaCompleta;
    }

    //TODO: controlla se funziona il fliter
    public static List<Files> listaFilesConsumer(String usernameCons) {
        List<Files> filesConsumerList = ofy().load().type(Files.class).filter("usernameCons", usernameCons).list();
//        filesConsumerList.removeIf(el -> !el.getUsernameCons().equals(usernameCons));
        return filesConsumerList;
    }

    public static List<FilesInfo> listaInfoFilesConsumer(String usernameCons) {
        List<FilesInfo> listFilesConsumer = getFilesInfos(listaFilesConsumer(usernameCons));
        return ordinamentoListaInfoFiles(listFilesConsumer);
    }



    public static List<FilesInfo> listaInfoFilesUploader(String usernameUpl) {
        List<FilesInfo> listFilesUploader = listaInfoFilesDatabase();
        listFilesUploader.removeIf(el -> !el.getUsernameUpl().equals(usernameUpl));
        return ordinamentoListaInfoFiles(listFilesUploader);
    }




    private static List<FilesInfo> getFilesInfos(List<Files> filesList) {
        List<FilesInfo> filesInfoList = new ArrayList<>();
        for (Files f : filesList) {
            filesInfoList.add(new FilesInfo(f));
        }
        return filesInfoList;
    }

    //TODO: mettere anche l'ordinamento per Files e non per files info?
    private static List<FilesInfo> ordinamentoListaInfoFiles(List<FilesInfo> listFilesComplete) {
        List<FilesInfo> filesLettiList = new ArrayList<>();
        for (FilesInfo fileInfo : listFilesComplete) {
            if (!fileInfo.getDataVisualizzazione().equals(""))
                filesLettiList.add(fileInfo);
        }
        listFilesComplete.removeIf(el -> !el.getDataVisualizzazione().equals(""));
        listFilesComplete.sort(new SortByDataCaricamento());
        filesLettiList.sort(new SortByDataCaricamento());
        listFilesComplete.addAll(filesLettiList);
        return listFilesComplete;
    }
}
