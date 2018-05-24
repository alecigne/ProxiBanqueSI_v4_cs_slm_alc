package fr.proxibanque.proxibanquesi.webservices;

import java.util.List;

import fr.proxibanque.proxibanquesi.model.Client;
import fr.proxibanque.proxibanquesi.model.Virement;

/**
 * Contient les méthodes pour Réaliser les opérations du SI (opérations bancaires) via les web services
 * 
 * @author Clothilde Szymezak, Sandrine Le Mentec, Anthony Le Cigne
 *
 */
public interface SIWebService {

	/**
	 * Receptionne l'objet virementdata provenant du front et réalise le virement (via service)
	 * @param virementdata
	 */
	public void virementCompteACompte(Virement virementdata);

	/**
	 * Receptionne un numéro de compte et un montant, puis credite le compte (via service)
	 * @param numeroCompte : numéro du compte provenant du front
	 * @param montant : montant provenant du front
	 */
	public void crediterCompte(long numeroCompte, double montant);

	/**
	 * Lance L'audit d'une agence (via la couche service) puis renvoie la liste des Clients qui ne respectent pas l'audit
	 * @return la liste des Clients qui ne respectent pas les conditions au format JSON
	 */
	List<Client> auditerAgence();

	/**
	 * receptionne un montant à emprunter, une durée de pret et un taux provenant du front, realise la simulation (via service) puis renvoie la mensualité à rembourser
	 * @param montant Montant à emprunter provenant du front
	 * @param dureeMois durée du pret en mois provenant du front
	 * @param taux :taux en % provenant du front
	 * @return : la mensualité à rembourser
	 */
	double simulerCredit(double montant, int dureeMois, double taux);

}
