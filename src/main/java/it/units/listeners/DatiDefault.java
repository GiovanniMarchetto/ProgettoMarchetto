package it.units.listeners;

import com.googlecode.objectify.ObjectifyService;
import com.googlecode.objectify.VoidWork;
import it.units.entities.storage.Attore;
import it.units.persistance.AbstractHelper;
import it.units.persistance.AttoreHelper;
import it.units.utils.FixedVariables;

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
            }
        });
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {

    }
}
