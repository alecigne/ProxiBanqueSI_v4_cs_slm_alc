package fr.proxibanque.proxibanquesi.service;

import java.util.List;

import fr.proxibanque.proxibanquesi.exceptions.ServiceException;
import fr.proxibanque.proxibanquesi.model.CarteBancaire;
import fr.proxibanque.proxibanquesi.model.Compte;
import fr.proxibanque.proxibanquesi.model.CompteCourant;
import fr.proxibanque.proxibanquesi.model.CompteEpargne;

public interface GestionCompteService {

	public void attribuerCompteEpargneClient(long idClient, CompteEpargne compteEpargne) throws ServiceException;

	public void attribuerCompteCourantClient(long idClient, CompteCourant compteCourant) throws ServiceException;

	public List<Compte> afficherListeCompteClient(long idClient);

	public Compte afficherCompteNumero(long numCompte);

	public void modifierCompteEpargneClient(long idClient, CompteEpargne compteEpargne) throws ServiceException;

	public void modifierCompteCourantClient(long idClient, CompteCourant compteCourant) throws ServiceException;

	public void supprimerCompteCourantClient(long idClient) throws ServiceException;

	public void supprimerCompteEpargneClient(long idClient) throws ServiceException;

}
