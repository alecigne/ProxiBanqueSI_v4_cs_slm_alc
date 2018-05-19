package fr.proxibanque.proxibanquesi.service;

import java.util.List;

import fr.proxibanque.proxibanquesi.model.Client;

public interface AppService {
	
	void creerClient(Client client);
	
	Client obtenirClient(long idClient);
	
	List<Client> obtenirTousClients();
	
	void modifierClient(Client client);
	
	void supprimerClient(long idClient);
	
}
