package fr.proxibanque.proxibanquesi.service;

import java.util.List;

import fr.proxibanque.proxibanquesi.exceptions.ServiceException;
import fr.proxibanque.proxibanquesi.model.Client;

public interface SIService {

	public void VirementCompteACompte(long numCompteDepart, long numCompteArrivee, double montantTransfere)
			throws ServiceException;

	public void CrediterCompte(long numeroCompte, double montant);

	List<Client> auditerAgence();

	double simulerCredit(double montant, int dureeMois, double taux);
	
}
