package it.units.persistance;


import it.units.entities.proxies.FilesInfo;
import it.units.entities.storage.Files;
import it.units.utils.SortByDataCaricamento;

import java.util.ArrayList;
import java.util.List;

import static com.googlecode.objectify.ObjectifyService.ofy;

public class FilesHelper extends AbstractHelper {

    public static List<Files> listaFilesCompleta() {
        return ofy().load().type(Files.class).list();
    }

    public static List<FilesInfo> listaInfoFilesCompleta() {
        return getFilesInfos(listaFilesCompleta());
    }

    //TODO: creare un 'listHelper' con i metodi senza ofy
    public static List<FilesInfo> listaInfoFilesEsistenti() {
        List<Files> listaCompleta = listaFilesCompleta();
        listaCompleta.removeIf(file -> file.getFile() == null);
        return getFilesInfos(listaCompleta);
    }

    public static List<FilesInfo> listaInfoFilesEliminati() {
        List<Files> listaCompleta = listaFilesCompleta();
        listaCompleta.removeIf(file -> file.getFile() != null);
        return getFilesInfos(listaCompleta);
    }



    public static List<Files> listaFilesConsumer(String usernameCons) {
        List<Files> listaFilesConsumer = ofy().load().type(Files.class).filter("usernameCons", usernameCons).list();
        listaFilesConsumer.removeIf(file -> file.getFile()==null);
        return listaFilesConsumer;
    }
    public static List<Files> listaFilesUploader(String usernameUploader) {
        List<Files> listaFilesUploader = ofy().load().type(Files.class).filter("usernameUpl", usernameUploader).list();;
        listaFilesUploader.removeIf(file -> file.getFile()==null);
        return listaFilesUploader;
    }



    public static List<FilesInfo> listaInfoFilesConsumer(String usernameCons) {
        List<FilesInfo> listInfoFilesConsumer = getFilesInfos(listaFilesConsumer(usernameCons));
        return ordinamentoListaInfoFiles(listInfoFilesConsumer);
    }

    public static List<FilesInfo> listaInfoFilesUploader(String usernameUpl) {
        List<FilesInfo> listaInfoFilesUploader = getFilesInfos(listaFilesUploader(usernameUpl));
        return ordinamentoListaInfoFiles(listaInfoFilesUploader);
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
