package fr.proxibanque.proxibanquesi.model;

import javax.persistence.Entity;

/**
 * Cette classe décrit les caractéristiques d'un compte épargne ProxiBanque.
 * Chaque client peut disposer d'un compte courant après ajout explicite par un
 * conseiller.
 * 
 * @author Clothilde Szymezak, Sandrine Le Mentec, Anthony Le Cigne
 *
 */

@Entity
public class CompteCourant extends Compte {

	private double decouvertAutorise = 1000.0;
	
//	/**
//	 * Numéro de carte bancaire, FK dans la base Compte Courant
//	 */
//	@OneToOne(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE })
//	@JoinColumn(name = "numero_carte", unique = true)
//	private CarteBancaire carte;

	// *** CONSTRUCTEURS ***

	public CompteCourant() {
	}

	public CompteCourant(long numeroCompte, double solde, String dateOuverture) {
		this.numeroCompte = numeroCompte;
		this.solde = solde;
		this.dateOuverture = dateOuverture;
	}

	// *** GETTERS et SETTERS ***
	
	public double getDecouvertAutorise() {
		return decouvertAutorise;
	}

	public void setDecouvertAutorise(double decouvertAutorise) {
		this.decouvertAutorise = decouvertAutorise;
	}	

}
