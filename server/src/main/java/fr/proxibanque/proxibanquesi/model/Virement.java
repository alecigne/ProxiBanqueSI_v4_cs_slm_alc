package fr.proxibanque.proxibanquesi.model;

import org.springframework.web.bind.annotation.PathVariable;

// TODO Implémenter
public class Virement {
	
	private long numCompteDepart; 
	private long numCompteArrivee;
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
