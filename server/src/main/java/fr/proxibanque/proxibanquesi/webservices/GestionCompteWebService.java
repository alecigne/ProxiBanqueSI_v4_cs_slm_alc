package fr.proxibanque.proxibanquesi.webservices;

import java.util.List;

import org.springframework.http.ResponseEntity;

import fr.proxibanque.proxibanquesi.model.Compte;
import fr.proxibanque.proxibanquesi.model.CompteCourant;
import fr.proxibanque.proxibanquesi.model.CompteEpargne;

public interface GestionCompteWebService {

	public ResponseEntity<CompteEpargne> AttribuerCompteEpargneClient(long idClient, CompteEpargne compteEpargne);

	public ResponseEntity<CompteCourant> AttribuerCompteCourantClient(long idClient, CompteCourant compteEpargne);
	
	public List<Compte> AfficherListeCompteClient(long idClient);
	public Compte AfficherCompteNumero(long numCompte);

}
