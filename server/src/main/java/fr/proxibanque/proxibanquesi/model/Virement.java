package fr.proxibanque.proxibanquesi.model;

import org.springframework.web.bind.annotation.PathVariable;

/**
 * classe décrivant les éléments nécessaires à un virement (Objet envoyé par le front Angular)
 * 
 * @author Clothilde Szymezak, Sandrine Le Mentec, Anthony Le Cigne
 *
 */
public class Virement {
	
	/**
	 * numéro de compte crediteur
	 */
	private long numCompteDepart; 
	/**
	 * numéro de compte credité
	 */
	private long numCompteArrivee;
	/**
	 * montant à transferer
	 */
	private double montantTransfere;
	
	public Virement() {}

	public long getNumCompteDepart() {
		return numCompteDepart;
	}

	public long getNumCompteArrivee() {
		return numCompteArrivee;
	}

	public double getMontantTransfere() {
		return montantTransfere;
	}

	@Override
	public String toString() {
		return "Virement [numCompteDepart=" + numCompteDepart + ", numCompteArrivee=" + numCompteArrivee
				+ ", montantTransfere=" + montantTransfere + "]";
	}
	
	
}
