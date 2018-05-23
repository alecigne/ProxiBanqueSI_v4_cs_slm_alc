package fr.proxibanque.proxibanquesi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * Cette classe décrit les caractéristiques d'un compte épargne ProxiBanque.
 * Chaque client peut disposer d'un compte épargne après ajout explicite par un
 * conseiller. Aucune carte bancaire n'est associée à un compte épargne.
 * 
 * @author Clothilde Szymezak, Sandrine Le Mentec, Anthony Le Cigne
 *
 */

@Entity
public class CompteEpargne extends Compte {

	/**
	 * Taux de rémunération (négociable)
	 */
	@Column(name = "taux_remun")
	private double tauxRemun=0.03;
	
	// *** CONSTRUCTEURS *** 
	
	public CompteEpargne() {
	}

	public CompteEpargne(long numeroCompte, double solde, String dateOuverture, double tauxRemun) {
		this.numeroCompte = numeroCompte;
		this.solde = solde;
		this.dateOuverture = dateOuverture;
		this.tauxRemun = tauxRemun;
	}
	
	// *** GETTERS et SETTERS ***

	public double getTauxRemun() {
		return tauxRemun;
	}

	public void setTauxRemun(double tauxremun) {
		this.tauxRemun = tauxremun;
	}

}
