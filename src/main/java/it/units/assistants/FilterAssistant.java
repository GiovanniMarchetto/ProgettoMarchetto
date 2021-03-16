package it.units.assistants;

import it.units.utils.FixedVariables;
import it.units.utils.MyException;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import java.util.Locale;

public class FilterAssistant {

    public static boolean filtroPerRuolo(ServletRequest servletRequest, String ruoloRichiesto, boolean controlloRuolo) {
        try {
            if (FixedVariables.debug)
                System.out.println("\n" + ruoloRichiesto.toUpperCase(Locale.ROOT) + " FILTER for path " + ((HttpServletRequest) servletRequest).getPathInfo());

            String token = JWTAssistant.getTokenJWTFromRequest((HttpServletRequest) servletRequest);

            if (!JWTAssistant.verificaJWT(token))
                throw new Exception("Il token non ha passato la verifica!");


            if (controlloRuolo) {
                String role = JWTAssistant.getRoleFromJWT(token);
                if (!role.equals(ruoloRichiesto))
                    throw new Exception("Non è un " + ruoloRichiesto + "...");
            }

            if (FixedVariables.debug)
                System.out.println("Filtro superato");

            return true;

        } catch (Exception e) {

            if (FixedVariables.debug) {
                System.out.println("DENIED ACCESS (Auth filter): " + e.getMessage());
                System.out.println("---------------------------------------------------");
            }

            return false;
        }
    }

    public static void controlloPrivilegi(String token, String role) throws MyException {
        switch (JWTAssistant.getRoleFromJWT(token)) {
            case FixedVariables.CONSUMER:
                throw new MyException("Un consumer non può effettuare questa operazione.");
            case FixedVariables.UPLOADER:
                if (!role.equals(FixedVariables.CONSUMER))
                    throw new MyException("Un uploader non può effettuare questa operazione.");
                break;
            case FixedVariables.ADMINISTRATOR:
                if (role.equals(FixedVariables.CONSUMER))
                    throw new MyException("Un amministratore non può agire sui consumer.");
                break;
            default:
                throw new MyException("Ruolo mancante...");
        }
    }
}
