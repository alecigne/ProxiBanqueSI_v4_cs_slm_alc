package fr.proxibanque.proxibanquesi.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Agence {

	@Id
	@Column(name = "id_agence")
	private String idAgence;

	@OneToOne(cascade = { CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE })
	@JoinColumn(name = "gerant_id", unique = true)
	private Gerant gerant;

	@OneToMany(cascade = { CascadeType.PERSIST })
	@JoinColumn(name = "agence_id")
	private Set<Conseiller> listeConseillers = new HashSet<>();

	// *** CONSTRUCTEURS ***

	public Agence() {
		super();
	}

	// *** GETTERS et SETTERS ***

	public Agence(String idAgence, Gerant gerant) {
		this.idAgence = idAgence;
		this.gerant = gerant;
	}

	public Gerant getGerant() {
		return gerant;
	}

	public void setGerant(Gerant gerant) {
		this.gerant = gerant;
	}

	public Set<Conseiller> getListeConseillers() {
		return listeConseillers;
	}

	public void setListeConseillers(Set<Conseiller> listeConseillers) {
		this.listeConseillers = listeConseillers;
	}

}
