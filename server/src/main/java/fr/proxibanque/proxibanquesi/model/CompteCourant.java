package fr.proxibanque.proxibanquesi.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

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

	@OneToOne(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE })
	@JoinColumn(name = "numero_carte", unique = true)
	private CarteBancaire carteBancaire;

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

	public CarteBancaire getCarteBancaire() {
		return carteBancaire;
	}

	public void setCarteBancaire(CarteBancaire carteBancaire) {
		this.carteBancaire = carteBancaire;
	}

}
