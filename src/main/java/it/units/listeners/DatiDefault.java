package it.units.listeners;

import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.VoidWork;
import it.units.entities.storage.Attore;
import it.units.entities.storage.Files;
import it.units.persistance.AttoreHelper;
import it.units.persistance.FilesHelper;
import it.units.utils.FixedVariables;
import it.units.utils.UtilsRest;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

@WebListener
public class DatiDefault implements ServletContextListener {
    //https://stackoverflow.com/questions/34476401/objectify-context-not-started-objectifyfilter-missing
    @Override
    public void contextInitialized(ServletContextEvent sce) {
        ObjectifyService.run(new VoidWork() {
            public void vrun() {
                Attore attore = new Attore("admin@prog.com", "admin@prog.com", "Admin", "admin@prog.com", FixedVariables.ADMINISTRATOR, "");
                AttoreHelper.saveDelayed(attore,true);

            ////////////////////////////////////
            //TODO: dati di prova da rimuovere
            ////////////////////////////////////
                creaAttore("upl1","Banca Paperopoli",FixedVariables.UPLOADER,logoUpl1);

                creaAttore("upl2","Assicurazione Duemila&Crediti",FixedVariables.UPLOADER,logoUpl2);

                creaAttore("PLNPRN60D01F376W","Paperino",FixedVariables.CONSUMER,"");

                creaAttore("MRABRS94S18G964G","Mario",FixedVariables.CONSUMER,"");

                creaAttore("PCHPNC88L05E473A","Peach",FixedVariables.CONSUMER,"");

                creaAttore("YMURLT84E17H294Q","Yuma",FixedVariables.CONSUMER,"");

                creaFile("upl1", "PLNPRN60D01F376W", "QmVsbGE=",
                        "doc1.txt", UtilsRest.getDataString(), "bello");

                creaFile("upl1", "PLNPRN60D01F376W", "QnJ1dHRh",
                        "doc2.txt", UtilsRest.getDataString(30), "brutto");

                creaFile("upl2", "PLNPRN60D01F376W", "U3RyaW5nYSBjYXR0aXZh",
                        "doc4.txt", UtilsRest.getDataString(100), "cattivo");

                creaFile("upl1", "YMURLT84E17H294Q", "QmVsbGE=",
                        "doc3.txt", UtilsRest.getDataString(15), "bello");

                creaFile("upl1", "MRABRS94S18G964G", "U3RyaW5nYSBjYXR0aXZh",
                        "doc5.txt", UtilsRest.getDataString(10), "cattivo");
            }
        });
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {

    }

    private static final String logoUpl1 = "data:image/jpeg;base64,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";

    private static final String logoUpl2 = "data:image/jpeg;base64,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";

    private void creaFile(String usernameUpl, String usernameCons, String fileBase64, String fileName, String dataCaricamento, String hashtag) {
        Files documento = new Files(usernameUpl, usernameCons, fileBase64, fileName, dataCaricamento, hashtag);
        FilesHelper.saveDelayed(documento);
    }

    private void creaAttore(String username, String name, String ruolo, String logo) {
        Attore attore = new Attore(username, username, name, name.toLowerCase() + "@prog.com", ruolo, logo);
        AttoreHelper.saveDelayed(attore,true);
    }
}
