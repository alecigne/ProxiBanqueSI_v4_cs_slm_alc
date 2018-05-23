package fr.proxibanque.proxibanquesi.webservices;

public interface SIWebService {
	public void VirementCompteACompte(long numCompteDepart, long numCompteArrivee, double montantTransfere);
	public void CrediterCompte(long numeroCompte, double montant);

}
