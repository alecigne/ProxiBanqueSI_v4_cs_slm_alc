package fr.proxibanque.proxibanquesi.service;

import java.util.List;

import fr.proxibanque.proxibanquesi.exceptions.ServiceException;
import fr.proxibanque.proxibanquesi.model.Client;

/**
 * Interface définissant les méthodes du service pour manipuler des Clients (CRUD et attribution à un conseiller)
 * 
 * @author Clothilde Szymezak, Sandrine Le Mentec, Anthony Le Cigne
 *
 */
public interface GestionClientService {
	
	/**
	 * Sauvegarde un Client en Base
	 * @param client : Objet Client contenant les données à sauvegarder
	 * @throws ServiceException : Si l'objet receptionné est null, renvoie une exception
	 */
	void creerClient(Client client) throws ServiceException;
	
	/**
	 * Sauvegarde un client en base en le liant avec le conseiller
	 * @param client : client à sauvegarder
	 * @param idConseiller : id du conseiller qui s'occupe du client
	 * @throws ServiceException : 
	 */
	void creerClientAvecConseiller(Client client, long idConseiller) throws ServiceException;
	
	/**
	 * récupérer un client à partir de son Id
	 * @param idClient : Id du client à retourner
	 * @return une instance du client recherché
	 */
	Client obtenirClient(long idClient);
	
	/**
	 * Récuperer la liste de tous les clients (par agence à terme)
	 * @return
	 */
	List<Client> obtenirTousClients();
	
	/**
	 * Récuperer la liste des clients d'un conseiller
	 * @param idConseiller : Id du conseiller 
	 * @return une List<Client> contenant les clients du conseiller 
	 */
	List<Client> obtenirClientsParIdConseiller(long idConseiller);
	
	/**
	 * Modifie un client
	 * @param client : objet client contenant les modifications à apporter
	 * @throws ServiceException
	 */
	void modifierClient(Client client) throws ServiceException;
	
	/**
	 * Supprime un client de la base
	 * @param idClient : Id du client à supprimer
	 * @throws ServiceException : renvoie une exception si le client n'existe pas dans la base de données
	 */
	void supprimerClient(long idClient) throws ServiceException;
	
}
