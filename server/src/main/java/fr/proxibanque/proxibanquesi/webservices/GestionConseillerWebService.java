package fr.proxibanque.proxibanquesi.webservices;

import fr.proxibanque.proxibanquesi.model.Conseiller;

/**
 * Contient les méthodes pour gérer les webservice sur le conseiller
 * 
 * @author  Clothilde Szymezak, Sandrine Le Mentec, Anthony Le Cigne
 *
 */
public interface GestionConseillerWebService {

	/**
	 * Receptionne le login et le password envoyé par le front et renvoie un Objet conseiller si le login et le password sont valides. 
	 * @param login : provenance front
	 * @param password : provenance front
	 * @return : un Objet conseiller en JSON
	 */
	Conseiller obtenirConseillerParAuth(String login, String password);
	
}
