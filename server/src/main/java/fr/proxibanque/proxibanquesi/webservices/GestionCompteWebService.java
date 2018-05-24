package fr.proxibanque.proxibanquesi.webservices;

import java.util.List;

import org.springframework.http.ResponseEntity;

import fr.proxibanque.proxibanquesi.model.Client;
import fr.proxibanque.proxibanquesi.model.Compte;
import fr.proxibanque.proxibanquesi.model.CompteCourant;
import fr.proxibanque.proxibanquesi.model.CompteEpargne;

public interface GestionCompteWebService {

	public ResponseEntity<CompteEpargne> attribuerCompteEpargneClient(long idClient, CompteEpargne compteEpargne);

	public ResponseEntity<CompteCourant> attribuerCompteCourantClient(long idClient, CompteCourant compteEpargne);

	public List<Compte> afficherListeCompteClient(long idClient);

	public Compte afficherCompteNumero(long numCompte);

	public ResponseEntity<Compte> supprimerCompteCourant(long idClient);

	public ResponseEntity<Compte> supprimerCompteEpargne(long idClient);
	
	ResponseEntity<Compte> modifierCompteCourant(long idClient, CompteCourant compteCourantModif);
	
	ResponseEntity<Compte> modifierCompteEpargne(long idClient, CompteEpargne compteEpargneModif);

}
