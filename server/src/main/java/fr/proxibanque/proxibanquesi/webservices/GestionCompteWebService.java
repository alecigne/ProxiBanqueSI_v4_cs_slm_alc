package fr.proxibanque.proxibanquesi.webservices;

import java.util.List;

import org.springframework.http.ResponseEntity;

import fr.proxibanque.proxibanquesi.model.Client;
import fr.proxibanque.proxibanquesi.model.Compte;
import fr.proxibanque.proxibanquesi.model.CompteCourant;
import fr.proxibanque.proxibanquesi.model.CompteEpargne;

/**
 * Contient les méthodes WebServices pour manipuler les Comptes (echanges front - back)
 * 
 * @author Clothilde Szymezak, Sandrine Le Mentec, Anthony Le Cigne
 *
 */
public interface GestionCompteWebService {

	/**
	 * Receptionne un Objet CompteEpargne et un client (attribution via service) puis renvoie une reponse HTTP 
	 * @param idClient : Id du client (provenant du front)
	 * @param compteEpargne : Objet compte Epargne (provenant du front)
	 * @return reponse HTTP (200 si l'attribution s'est bien passée, 400 sinon)
	 */
	public ResponseEntity<CompteEpargne> attribuerCompteEpargneClient(long idClient, CompteEpargne compteEpargne);

	/**
	 * Receptionne un Objet CompteCourant et un client (attribution via service) puis renvoie une reponse HTTP 
	 * @param idClient : Id du client (provenant du front)
	 * @param compteCourant : Objet compte Epargne (provenant du front)
	 * @return reponse HTTP (200 si l'attribution s'est bien passée, 40x sinon)
	 */
	public ResponseEntity<CompteCourant> attribuerCompteCourantClient(long idClient, CompteCourant compteCourant);

	/**
	 * receptionne un id Client et envoie la liste de Compte d'un client au front (récupération via service)
	 * @param idClient : id du client
	 * @return : liste des Compte du client au format JSON
	 */
	public List<Compte> afficherListeCompteClient(long idClient);

	/**
	 * receptionne un numéro de Compte et envoie l'objet Compte au front (récupération via service)
	 * @param numCompte : numéro du compte à récupérer
	 * @return : l'objet Compte au format JSON
	 */
	public Compte afficherCompteNumero(long numCompte);

	/**
	 * receptionne l'id d'un client, supprime son compte Courant (via service) puis envoie une reponse HTTP
	 * @param idClient : id du client
	 * @return : reponse HTTP (200 si le suppression s'est bien passée, 40x sinon)
	 */
	public ResponseEntity<Compte> supprimerCompteCourant(long idClient);

	/**
	 * receptionne l'id d'un client, supprime son compte epargne (via service) puis envoie une reponse HTTP
	 * @param idClient : id du client
	 * @return : reponse HTTP (200 si le suppression s'est bien passée, 40x sinon)
	 */
	public ResponseEntity<Compte> supprimerCompteEpargne(long idClient);
	
	/**
	 * receptionne l'id d'un client et l'objet Compte courant à modifier, modifie Compte Courant (via service) puis envoie une reponse HTTP
	 * @param idClient : id du client (provenance front)
	 * @param compteCourantModif : objet Compte Courant au format JSON
	 * @return : reponse HTTP (200 si le suppression s'est bien passée, 40x sinon)
	 */
	ResponseEntity<Compte> modifierCompteCourant(long idClient, CompteCourant compteCourantModif);
	
	/**
	 * receptionne l'id d'un client et l'objet Compte epargne à modifier, modifie Compte Epargne (via service) puis envoie une reponse HTTP
	 * @param idClient : id du client (provenance front)
	 * @param compteEpargneModif : objet Compte Epargne au format JSON
	 * @return : reponse HTTP (200 si le suppression s'est bien passée, 40x sinon)
	 */
	ResponseEntity<Compte> modifierCompteEpargne(long idClient, CompteEpargne compteEpargneModif);

}
