package it.units.api;

import it.units.entities.storage.Attore;
import it.units.persistance.AttoreHelper;
import it.units.utils.FixedVariables;
import it.units.assistants.JWTAssistant;
import it.units.utils.MyException;
import it.units.assistants.PasswordAssistant;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/login")
public class LoginManager {

    @Context
    private HttpServletRequest request;
    @Context
    private HttpServletResponse response;

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response login(Attore attoreLogin) {
        try {
            Attore accountChiesto = AttoreHelper.getById(Attore.class, attoreLogin.getUsername());

            if (accountChiesto == null)
                throw new MyException("Username errato! (inesistente)");

            if (!PasswordAssistant.verifyPassword(attoreLogin.getPassword(), accountChiesto.getPassword(), accountChiesto.getSalt()))
                throw new MyException("Password errata!");

            System.out.println("Login eseguito con successo: " + attoreLogin.getUsername() + "\n");

            return Response
                    .status(Response.Status.OK)
                    .entity(JWTAssistant.creaJWT(attoreLogin.getUsername(), accountChiesto.getRole(),
                            accountChiesto.getName(), accountChiesto.getEmail()))
                    .build();
        } catch (MyException e) {
            if (FixedVariables.debug) System.out.println(e.getMessage() + "\n");
            return Response.status(Response.Status.NOT_FOUND).entity("ERR - " + e.getMessage()).build();
        }
    }
}
