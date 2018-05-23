package fr.proxibanque.proxibanquesi.service;

import fr.proxibanque.proxibanquesi.exceptions.ServiceException;
import fr.proxibanque.proxibanquesi.model.Conseiller;

public interface GestionConseillerService {

	void creerConseiller(Conseiller conseiller);

	Conseiller obtenirConseiller(long idConseiller);
	
	Conseiller obtenirConseillerParAuth(String login, String password) throws ServiceException;

}
