package fr.proxibanque.proxibanquesi.model;

import javax.persistence.Entity;

@Entity
public class Gerant extends Employe {

	public Gerant(String prenom, String nom, String login, String password) {
		super(prenom, nom, login, password);
		// TODO Auto-generated constructor stub
	}
	
}
