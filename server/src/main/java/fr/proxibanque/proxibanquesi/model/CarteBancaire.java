package fr.proxibanque.proxibanquesi.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Cette classe décrit les caractéristiques d'une carte bancaire ProxiBanque.
 * 
 * @author Clothilde Szymezak, Sandrine Le Mentec, Anthony Le Cigne
 *
 */

@Entity
public class CarteBancaire {

	public enum TypeCarte {
		ELECTRON, PREMIER
	};

	/**
	 * Numéro de la carte faisant office de PK dans la table des cartes bancaires et
	 * de FK dans la table des comptes courants.
	 */
	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "numero_carte")
	private long numeroCarte;

	/**
	 * Type de la carte (Electron ou Premier)
	 */
	@Enumerated(EnumType.STRING)
	@Column(name = "type_carte")
	private TypeCarte typeCarte;

	// *** CONSTRUCTEURS ***

	public CarteBancaire() {
	}

	public CarteBancaire(long numeroCarte, TypeCarte type) {
		this.numeroCarte = numeroCarte;
		this.typeCarte = type;
	}

	// *** GETTERS et SETTERS ***

	public long getNumeroCarte() {
		return numeroCarte;
	}

	public void setNumeroCarte(long numeroCarte) {
		this.numeroCarte = numeroCarte;
	}

	public TypeCarte getTypeCarte() {
		return typeCarte;
	}

	public void setTypeCarte(TypeCarte typeCarte) {
		this.typeCarte = typeCarte;
	}

}
