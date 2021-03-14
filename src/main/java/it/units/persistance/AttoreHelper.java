package it.units.persistance;

import it.units.assistants.PasswordAssistant;
import it.units.entities.storage.Attore;

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

    public static List<Attore> ListaAttoriRuolo(String ruolo) {
        return ofy().load().type(Attore.class).filter("role", ruolo).list();
    }

}
