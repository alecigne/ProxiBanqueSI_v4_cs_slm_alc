package fr.proxibanque.proxibanquesi.model;

import javax.persistence.Entity;

/**
 * Classe décrivant le gérant d'une agence 
 * 
 * @author Clothilde Szymezak, Sandrine Le Mentec, Anthony Le Cigne
 *
 */
@Entity
public class Gerant extends Employe {

	public Gerant(String prenom, String nom, String login, String password) {
		super(prenom, nom, login, password);
	}
	
}
