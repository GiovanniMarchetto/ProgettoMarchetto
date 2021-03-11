package it.units.persistance;

import it.units.entities.proxies.AttoreInfo;
import it.units.entities.proxies.FilesInfo;
import it.units.entities.storage.Attore;
import it.units.entities.storage.Files;
import it.units.utils.PasswordAssistant;

import java.util.ArrayList;
import java.util.List;

import static com.googlecode.objectify.ObjectifyService.ofy;

public class AttoreHelper extends AbstractHelper {

    public static void saveDelayed(Attore attore, boolean nuovaPassword) {
        if (nuovaPassword)
            setSaleAndPassword(attore);
        ofy().save().entity(attore);
    }

    public static void saveNow(Attore attore, boolean nuovaPassword) {
        if (nuovaPassword)
            setSaleAndPassword(attore);
        ofy().save().entity(attore).now();
    }

    private static void setSaleAndPassword(Attore attore) {
        String sale = PasswordAssistant.generateSalt();
        attore.setSalt(sale);
        String passwordChiara = attore.getPassword();
        attore.setPassword(PasswordAssistant.hashPassword(passwordChiara, sale));
    }

    public static List<AttoreInfo> ListaAttoriRuolo(String ruolo) {
        List<Attore> attoreList = ofy().load().type(Attore.class).filter("role", ruolo).list();
        return getAttoreInfoList(attoreList);
    }

    //TODO: forse si può generalizzare mettendo le due classi
    public static List<AttoreInfo> getAttoreInfoList(List<Attore> attoreList) {
        List<AttoreInfo> attoreInfoList = new ArrayList<>();
        for (Attore a : attoreList) {
            attoreInfoList.add(new AttoreInfo(a));
        }
        return attoreInfoList;
    }

}
