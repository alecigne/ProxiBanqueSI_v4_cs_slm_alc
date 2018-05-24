package fr.proxibanque.proxibanquesi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

/**
 * Cette classe abstraite factorise les caractéristiques des employés
 * ProxiBanque (conseillers et gérants).
 * 
 * @author Clothilde Szymezak, Sandrine Le Mentec, Anthony Le Cigne
 *
 */

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Employe {

	// *** ATTRIBUTES ***
	/**
	 * Utilisé en PK de la table employe de la BDD
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_employe")
	private long idEmploye;
	private String nom;
	private String prenom;
	private String login;
	private String password;

	// *** CONSTRUCTORS ***

	public Employe() {
	}

	public Employe(String prenom, String nom, String login, String password) {
		this.prenom = prenom;
		this.nom = nom;
		this.login = login;
		this.password = password;
	}

	// *** GETTERS and SETTERS ***

	public long getId() {
		return idEmploye;
	}

	public void setId(int id) {
		this.idEmploye = id;
	}

	public String getPrenom() {
		return prenom;
	}

	public String getNom() {
		return nom;
	}

	public String getLogin() {
		return login;
	}

	public String getPassword() {
		return password;
	}

	// *** OTHER METHODS ***

}
