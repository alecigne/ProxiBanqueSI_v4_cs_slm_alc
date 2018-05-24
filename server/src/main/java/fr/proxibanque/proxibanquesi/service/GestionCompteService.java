package fr.proxibanque.proxibanquesi.service;

import java.util.List;

import fr.proxibanque.proxibanquesi.exceptions.ServiceException;
import fr.proxibanque.proxibanquesi.model.CarteBancaire;
import fr.proxibanque.proxibanquesi.model.Compte;
import fr.proxibanque.proxibanquesi.model.CompteCourant;
import fr.proxibanque.proxibanquesi.model.CompteEpargne;

/**
 * Interface définissant les méthodes pour manipuler des comptes (CRUD et Attribution à un client)
 * 
 * @author Clothilde Szymezak, Sandrine Le Mentec, Anthony Le Cigne
 *
 */
public interface GestionCompteService {

	/**
	 * Attribue un compte epargne à un client
	 * @param idClient : Id du client
	 * @param compteEpargne : Objet compte épargne à attribuer
	 * @throws ServiceException : Exception si le a déjà un compte epargne
	 */
	public void attribuerCompteEpargneClient(long idClient, CompteEpargne compteEpargne) throws ServiceException;

	/**
	 * Attribue un compte courant à un client
	 * @param idClient : Id du client
	 * @param compteEpargne : Objet compte courant à attribuer
	 * @throws ServiceException : Exception si le a déjà un compte epargne
	 */
	public void attribuerCompteCourantClient(long idClient, CompteCourant compteCourant) throws ServiceException;

	/**
	 * Récupere la liste des comptes d'un client
	 * @param idClient : Id du client
	 * @return une List<Compte> contenant les Comptes du client (au plus, un compte courant et un compte épargne)
	 */
	public List<Compte> afficherListeCompteClient(long idClient);

	/**
	 * Recupere un compte à partir de son numéro
	 * @param numCompte : numéro du compte à récupérer
	 * @return une instance de Compte 
	 */
	public Compte afficherCompteNumero(long numCompte);

	/**
	 * Modifie Les données d'un compte épargne d'un client spécifique
	 * @param idClient : Id du Client
	 * @param compteEpargne : Objet Compte épargne avec les modifications;
	 * @throws ServiceException : renvoie une exception si le compte épargne n'est pas attribué au client
	 */
	public void modifierCompteEpargneClient(long idClient, CompteEpargne compteEpargne) throws ServiceException;

	/**
	 * Modifie les données d'un compte courant d'un client spécifique
	 * @param idClient : Id du client
	 * @param compteCourant : Objet Compte Courant avec les modifications
	 * @throws ServiceException : renvoie une exception si le copte courant n'est pas attribué au client
	 */
	public void modifierCompteCourantClient(long idClient, CompteCourant compteCourant) throws ServiceException;

	/**
	 * Supprime le compte Courant d'un client spécifique
	 * @param idClient : id du client
	 * @throws ServiceException : renvoie une exception si le client n'a pas de compte courant
	 */
	public void supprimerCompteCourantClient(long idClient) throws ServiceException;

	/**
	 * Supprime le compte epargne d'un client spécifique
	 * @param idClient : id du client
	 * @throws ServiceException : renvoie une exception si le client n'a pas de compte epargne
	 */
	public void supprimerCompteEpargneClient(long idClient) throws ServiceException;

}
