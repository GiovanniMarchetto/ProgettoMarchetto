package it.units.utils;

import it.units.entities.storage.Attore;
import it.units.entities.support.SupportFileUpload;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.Properties;

public class MailAssistant {
    public static String sendMail(String indirizzoFrom, String nomeFrom,
                                  String indirizzoTo, String nomeTo, String oggettoMail,
                                  String testoMail, String responseSuccess) {
        try {
            Properties props = new Properties();
            Session session = Session.getDefaultInstance(props, null);
            Message msg = new MimeMessage(session);

            msg.setFrom(new InternetAddress(indirizzoFrom, nomeFrom));

            msg.addRecipient(Message.RecipientType.TO,
                    new InternetAddress(indirizzoTo, nomeTo));
            msg.setSubject(oggettoMail);
            msg.setText(testoMail);

            Transport.send(msg);
            return responseSuccess;

        } catch (AddressException e) {
            System.out.println("Problema con indirizzo");
            return "ERR - " + e.getMessage();
        } catch (MessagingException e) {
            System.out.println("Problema con il messaggio");
            return "ERR - " + e.getMessage();
        } catch (UnsupportedEncodingException e) {
            System.out.println("Problema con encoding");
            return "ERR - " + e.getMessage();
        } catch (Exception e) {
            System.out.println(e.getMessage() + "\n");
            return "ERR - " + e.getMessage();
        }
    }

    public static String sendMailCreazioneAttore(Attore attore,String passwordProvvisoria, String usernameUpl) {
        return sendMail(usernameUpl + "@progmarchetto.appspotmail.com", "Uploader " + usernameUpl,
                attore.getEmail(), attore.getName(),
                "Creazione account " + attore.getRole(),
                "Buongiorno, è stato creato un account con la sua mail.\n "
                        + "Le credenziali sono: \n " +
                        "Username: " + attore.getUsername() + "\n" +
                        "Password: " + passwordProvvisoria + "\n" +
                        "\n Se vuole andare sul nostro sito acceda a: " + FixedVariables.HOMEPAGE + "\n" +
                        "\n Le consigliamo vivamente di cambiare la password.\n Cordiali saluti.",
                "Creazione del consumer " + attore.getUsername() + " avvenuta. \n"
        );
    }

    //TODO: da sistemare le informazioni
    public static String sendNotifica(SupportFileUpload supportFileUpload, String usernameUpl, String fileID) {

        String indFile = FixedVariables.BASE_IND_FILES + "/" + fileID;

        return sendMail(usernameUpl + "@progmarchetto.appspotmail.com", "Uploader " + usernameUpl,
                supportFileUpload.getEmailCons(), supportFileUpload.getNameCons(),
                "Nuovo file caricato",
                "È statocaricato un nuovo file da parte di " + usernameUpl + ".\n" +
                        "Il nome del file caricato è: " + supportFileUpload.getNameFile() + ".\n" +
                        "\n Se vuole andare sul nostro sito acceda a: " + FixedVariables.HOMEPAGE + "\n" +
                        "\n Se vuole scaricare direttamente il file: " + indFile + "\n"
                        + "Cordiali saluti.",
                "Notifica inviata al consumer correttamente."
        );
    }
}
