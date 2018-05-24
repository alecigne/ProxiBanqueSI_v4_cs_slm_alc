package fr.proxibanque.proxibanquesi.service;

import fr.proxibanque.proxibanquesi.exceptions.ServiceException;
import fr.proxibanque.proxibanquesi.model.Conseiller;

/**
 * Interface décrivant les méthodes pour manipuler un Conseiller (CR et récupérer les authentifications)
 * 
 * @author Clothilde Szymezak, Sandrine Le Mentec, Anthony Le Cigne
 *
 */
public interface GestionConseillerService {

	/**
	 * permet de créer un conseiller
	 * @param conseiller : Objet conseiller à sauvegarder en base
	 */
	void creerConseiller(Conseiller conseiller);

	/**
	 * Récupère un conseiller en base
	 * @param idConseiller : Id du Conseiller à récuperer
	 * @return : Un Objet Conseiller (contenant les données en base)
	 */
	Conseiller obtenirConseiller(long idConseiller);
	
	/**
	 * Récupére un conseiller en base si le login et le mot de passe sont corrects
	 * @param login : login envoyé par le front (tapé par l'utilisateur)
	 * @param password : mot de passe envoyé par le front (tapé par l'utilisateur)
	 * @return : un objet Conseiller 
	 * @throws ServiceException
	 */
	Conseiller obtenirConseillerParAuth(String login, String password) throws ServiceException;

}
