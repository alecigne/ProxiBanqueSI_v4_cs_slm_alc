package fr.proxibanque.proxibanquesi.service;

import java.util.List;

import fr.proxibanque.proxibanquesi.exceptions.ServiceException;
import fr.proxibanque.proxibanquesi.model.Compte;
import fr.proxibanque.proxibanquesi.model.CompteCourant;
import fr.proxibanque.proxibanquesi.model.CompteEpargne;

public interface GestionCompteService {

	public void AttribuerCompteEpargneClient(long idClient, CompteEpargne compteEpargne) throws ServiceException;

	public void AttribuerCompteCourantClient(long idClient, CompteCourant compteCourant) throws ServiceException;

	public List<Compte> AfficherListeCompteClient(long idClient);

	public Compte AfficherCompteNumero(long numCompte);

	public void ModifierCompteEpargneClient(long idClient, CompteEpargne compteEpargne);

	public void ModifierCompteCourantClient(long idClient, CompteCourant compteCourant);

}
