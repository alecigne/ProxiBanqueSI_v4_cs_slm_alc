package fr.proxibanque.proxibanquesi.webservices;

import fr.proxibanque.proxibanquesi.model.Conseiller;

public interface GestionConseillerWebService {

	Conseiller obtenirConseillerParAuth(String login, String password);
	
}
