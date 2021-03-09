package it.units.listeners;


import com.googlecode.objectify.ObjectifyService;
import it.units.entities.storage.Attore;
import it.units.entities.storage.Files;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

@WebListener
public class ObjectifyStarter implements ServletContextListener {

    public void contextInitialized(ServletContextEvent sce) {

        ObjectifyService.register(Attore.class);
        ObjectifyService.register(Files.class);

//        ObjectifyService.register(FilesInfo.class);
//        ObjectifyService.register(AttoreInfo.class);

//        ObjectifyService.register(SupportAttore.class);
//        ObjectifyService.register(SupportFileUpload.class);
//        ObjectifyService.register(ResumeForAdmin.class);
//        ObjectifyService.register(FromTo.class);

    }

    public void contextDestroyed(ServletContextEvent sce) {

    }
}
