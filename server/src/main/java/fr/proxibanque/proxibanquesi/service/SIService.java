package fr.proxibanque.proxibanquesi.service;

import fr.proxibanque.proxibanquesi.exceptions.ServiceException;

public interface SIService {
	public void VirementCompteACompte(long numCompteDepart, long numCompteArrivee, double montantTransfere) throws ServiceException;
	
	public void CrediterCompte(long numeroCompte, double montant);
}
