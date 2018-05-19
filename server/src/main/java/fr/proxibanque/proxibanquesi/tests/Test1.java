package fr.proxibanque.proxibanquesi.tests;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import fr.proxibanque.proxibanquesi.config.SpringConfig;
import fr.proxibanque.proxibanquesi.model.Client;
import fr.proxibanque.proxibanquesi.service.AppService;
import fr.proxibanque.proxibanquesi.service.AppServiceImp;

public class Test1 {

	public static void main(String[] args) {
		ApplicationContext context = new AnnotationConfigApplicationContext(SpringConfig.class);
		AppService service = context.getBean("service", AppServiceImp.class);
		Client c1 = new Client("Michel", "Dupont");
		service.creerClient(c1);
	}

}
