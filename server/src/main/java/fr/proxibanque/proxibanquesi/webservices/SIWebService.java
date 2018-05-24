package fr.proxibanque.proxibanquesi.webservices;

import java.util.List;

import fr.proxibanque.proxibanquesi.model.Client;
import fr.proxibanque.proxibanquesi.model.Virement;

public interface SIWebService {

	public void virementCompteACompte(Virement virementdata);

	public void crediterCompte(long numeroCompte, double montant);

	List<Client> auditerAgence();

	double simulerCredit(double montant, int dureeMois, double taux);

}
