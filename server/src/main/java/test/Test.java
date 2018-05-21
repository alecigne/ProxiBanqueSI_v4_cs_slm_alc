package test;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import fr.proxibanque.proxibanquesi.config.SpringConfig;
import fr.proxibanque.proxibanquesi.config.WebAppInitializer;
import fr.proxibanque.proxibanquesi.config.WebConfig;
import fr.proxibanque.proxibanquesi.model.Client;
import fr.proxibanque.proxibanquesi.model.Compte;
import fr.proxibanque.proxibanquesi.service.GestionClientService;
import fr.proxibanque.proxibanquesi.service.ProxiBanqueServiceImp;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes={SpringConfig.class, WebConfig.class, WebAppInitializer.class})



public class Test {
	//@Autowired
	//ProxiBanqueServiceImp service;


	@org.junit.Test
	public void testAffichageClient() {
//		Client client = service.obtenirClient(1);
//		System.out.println(client);
		//assertEquals(1, client.getIdClient());
		assertTrue(true);
	}

}
