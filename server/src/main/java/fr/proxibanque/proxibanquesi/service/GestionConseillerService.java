package fr.proxibanque.proxibanquesi.service;

import fr.proxibanque.proxibanquesi.model.Conseiller;

public interface GestionConseillerService {

	void creerConseiller(Conseiller conseiller);

	Conseiller obtenirConseiller(long idConseiller);

}
