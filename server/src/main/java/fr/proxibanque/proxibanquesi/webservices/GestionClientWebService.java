package fr.proxibanque.proxibanquesi.webservices;

import java.util.List;

import org.springframework.http.ResponseEntity;

import fr.proxibanque.proxibanquesi.model.Client;

public interface GestionClientWebService {

	// TODO Les annotations devraient être déplacées ici. Ceci semble causer des
	// problèmes liés à Spring.

	ResponseEntity<Client> creerClient(Client client);

	Client obtenirClient(long idClient);

	List<Client> obtenirTousClients();

	ResponseEntity<Client> modifierClient(Client client);

	ResponseEntity<Client> supprimerClient(long idClient);

}
