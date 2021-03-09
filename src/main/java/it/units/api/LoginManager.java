package it.units.api;

import it.units.entities.storage.Attore;
import it.units.persistance.AttoreHelper;
import it.units.utils.JWTAssistant;
import it.units.utils.PasswordAssistant;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

@Path("/login")
public class LoginManager {

    @Context
    private HttpServletRequest request;
    @Context
    private HttpServletResponse response;

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public String login(Attore attoreLogin) {
        try {
            Attore accountChiesto = AttoreHelper.getById(Attore.class, attoreLogin.getUsername());

            if (accountChiesto == null)
                throw new Exception("Username errato! (inesistente)");

            if (!PasswordAssistant.verifyPassword(attoreLogin.getPassword(), accountChiesto.getPassword(), accountChiesto.getSalt()))
                throw new Exception("Password errata!");

            System.out.println("Login eseguito con successo: " + attoreLogin.getUsername() + "\n");

            return JWTAssistant.creaJWT(attoreLogin.getUsername(), accountChiesto.getRole(),
                    accountChiesto.getName(), accountChiesto.getEmail());
        } catch (Exception e) {
            System.out.println(e.getMessage() + "\n");
            return "ERR - " + e.getMessage();
        }
    }
}
