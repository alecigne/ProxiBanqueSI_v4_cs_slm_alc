package fr.proxibanque.proxibanquesi.service;

import java.util.List;

import fr.proxibanque.proxibanquesi.exceptions.ServiceException;
import fr.proxibanque.proxibanquesi.model.Client;

/**
 * Interface décrivant les méthodes du SI (opérations bancaires)
 * 
 * @author Clothilde Szymezak, Sandrine Le Mentec, Anthony Le Cigne
 *
 */
public interface SIService {

	/**
	 * Méthode permettant de réaliser un virement de Compte à Compte
	 * @param numCompteDepart : Compte crediteur
	 * @param numCompteArrivee : Compte crédité
	 * @param montantTransfere : montant à transférer
	 * @throws ServiceException : revoie une exception si le découvert du compte crediteur est dépassé
	 */
	public void virementCompteACompte(long numCompteDepart, long numCompteArrivee, double montantTransfere)
			throws ServiceException;

	/**
	 * Méthode pour créditer un compte
	 * @param numeroCompte : numéro du compte à crediter
	 * @param montant : montant à creidter
	 */
	public void crediterCompte(long numeroCompte, double montant);

	/**
	 * Méthode pour auditer l'agence
	 * @return une List<Client> contenant les clients qui ne respectent pas les conditions de l'audit
	 */
	List<Client> auditerAgence();

	/**
	 * Méthode pour simuler un credit, retourne la mensualité du pret
	 * @param montant : montant du prêt demandé
	 * @param dureeMois : durée du pret en mois
	 * @param taux : taux du pret
	 * @return : la mensualité sous forme de double
	 */
	double simulerCredit(double montant, int dureeMois, double taux);
	
}
