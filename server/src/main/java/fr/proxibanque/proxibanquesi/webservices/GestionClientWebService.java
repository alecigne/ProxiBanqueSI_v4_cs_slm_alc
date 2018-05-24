package fr.proxibanque.proxibanquesi.webservices;

import java.util.List;

import org.springframework.http.ResponseEntity;

import fr.proxibanque.proxibanquesi.model.Client;

/**
 * Interface décrivant les méthodes qui gèrent les web services sur l'objet client
 * 
 * @author Clothilde Szymezak, Sandrine Le Mentec, Anthony Le Cigne
 *
 */
/**
 * @author adminl
 *
 */
public interface GestionClientWebService {

	// TODO Les annotations devraient être déplacées ici. Ceci semble causer des
	// problèmes liés à Spring.

	/**
	 * Creation d'un client à partir d'un objet Json envoyé par le front (tapé par l'utilisateur)
	 * @param client : Objet client Envoyé par le front contenant les données entrées par l'utilisateur
	 * @return : une reponse HTTP (200 si la creation s'est bien passée, 40x si erreur)
	 */
	ResponseEntity<Client> creerClient(Client client);

	/**
	 * Creation d'un client et l'associer à un conseiller spécifique à partir d'un objet Json envoyé par le front (tapé par l'utilisateur)
	 * @param client : objet client à sauvegarder (envoyer par le front, )
	 * @param idConseiller
	 * @return
	 */
	ResponseEntity<Client> creerClientAvecConseiller(Client client, long idConseiller);

	/** Envoie un objet client spécifique en JSON au front
	 * @param idClient : id du client 
	 * @return l'objet client en base au format JSON
	 */
	Client obtenirClient(long idClient);

	/**
	 * Envoie la liste de tous les clients de la base au front
	 * @return une liste d'objet client au format JSON
	 */
	List<Client> obtenirTousClients();

	/**
	 * Envoie la liste des clients d'un conseiller sépcifique au front
	 * @param idConseiller
	 * @return une liste d'objet client au format JSON du conseiller
	 */
	List<Client> obtenirClientsParIdConseiller(long idConseiller);

	/**
	 * Receptionne un client à modifier provenant du front puis le sauvegarde (via couche service)
	 * @param client : Objet client avec les modifications
	 * @return une réponse HTTP (200 si la modification s'est bien passée, 40x si erreur) 
	 */
	ResponseEntity<Client> modifierClient(Client client);

	/**
	 * Receptionne un client à modifier provenant du front puis le sauvegarde (via couche service)
	 * @param idClient : id du Client à supprimer
	 * @return une réponse HTTP (200 si la suppression s'est bien passée, 40x si erreur) 
	 */
	ResponseEntity<Client> supprimerClient(long idClient);

}
