package fr.proxibanque.proxibanquesi.webservices;

import java.util.List;

import fr.proxibanque.proxibanquesi.model.Client;
import fr.proxibanque.proxibanquesi.model.Virement;

public interface SIWebService {

	public void VirementCompteACompte(long numCompteDepart, long numCompteArrivee, double montantTransfere, Virement virementdata);
	public void CrediterCompte(long numeroCompte, double montant);

	List<Client> auditerAgence();

}
