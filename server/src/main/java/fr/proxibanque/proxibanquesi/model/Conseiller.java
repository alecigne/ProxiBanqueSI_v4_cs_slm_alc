package fr.proxibanque.proxibanquesi.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Conseiller extends Employe {

	@OneToMany(fetch = FetchType.EAGER, cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE })
	@JoinColumn(name = "conseiller_id")
	private Set<Client> listeClients = new HashSet<>();

	// *** CONSTRUCTEURS ***

	public Conseiller() {
		super();
	}

	public Conseiller(String prenom, String nom, String login, String password) {
		super(prenom, nom, login, password);
	}

	// *** GETTERS et SETTERS ***

	public Set<Client> getListeClients() {
		return listeClients;
	}

	public void setListeClients(Set<Client> listeClients) {
		this.listeClients = listeClients;
	}

}
