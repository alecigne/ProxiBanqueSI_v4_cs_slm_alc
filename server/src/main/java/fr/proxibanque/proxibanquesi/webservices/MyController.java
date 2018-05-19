package fr.proxibanque.proxibanquesi.webservices;

import java.util.List;

import org.springframework.http.ResponseEntity;

import fr.proxibanque.proxibanquesi.model.Client;

public interface MyController {
	
	ResponseEntity<Client> creerClient(Client client);
	
	Client obtenirClient(long idClient);
		
	List<Client> obtenirTousClients();
	
}
