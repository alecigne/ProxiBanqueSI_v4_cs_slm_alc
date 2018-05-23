package fr.proxibanque.proxibanquesi.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import fr.proxibanque.proxibanquesi.dao.ClientDAO;
import fr.proxibanque.proxibanquesi.dao.ConseillerDAO;
import fr.proxibanque.proxibanquesi.dao.CompteDAO;
import fr.proxibanque.proxibanquesi.exceptions.ServiceException;
import fr.proxibanque.proxibanquesi.model.Client;
import fr.proxibanque.proxibanquesi.model.Compte;
import fr.proxibanque.proxibanquesi.model.CompteCourant;
import fr.proxibanque.proxibanquesi.model.Conseiller;
import fr.proxibanque.proxibanquesi.model.CompteEpargne;

/**
 * @author Clothilde, Sandrine et Anthony
 *
 */
@Service("service")
public class ProxiBanqueServiceImp
		implements GestionClientService, GestionCompteService, GestionConseillerService, SIService {

	// *** ATTRIBUTS ***

	@Autowired
	@Qualifier("clientDAO")
	ClientDAO clientDao;

	@Autowired
	ConseillerDAO conseillerDao;

	@Autowired
	@Qualifier("compteDAO")
	CompteDAO compteDAO;

	// pas de découvert autorisé pour un compte Epargne (découvert autorisé défini
	// pour chaque compte courant)
	static double limiteDecouvertAutoriseEpargne = 0.0;

	// *** GETTERS et SETTERS ***

	/**
	 * Permet d'attribuer une DAO client au service afin de réaliser les tests
	 * Mockito.
	 * 
	 * @param clientDao
	 */
	public void setClientDao(ClientDAO clientDao) {
		this.clientDao = clientDao;
	}

	// *** GESTION CLIENTS ***

	@Override
	public void creerClient(Client client) throws ServiceException {
		if (!clientEstValide(client)) {
			throw new ServiceException("Client invalide !");
		} else {
			clientDao.save(client);
		}
	}

	@Override
	public void creerClientAvecConseiller(Client client, long idConseiller) throws ServiceException {
		Conseiller conseiller = this.obtenirConseiller(idConseiller);
		if (conseiller == null) {
			throw new ServiceException("Conseiller inexistant !");
		} else {
			conseiller.getListeClients().add(client);
			conseillerDao.save(conseiller);
		}

	}

	private boolean clientEstValide(Client client) {
		if (client == null) {
			return false;
		}
		String nom = client.getNom();
		String prenom = client.getPrenom();
		// Teste si les nom et prénom sont null, vides, ou ne contiennent que des
		// espaces
		if (nom == null || nom.trim().isEmpty()) {
			return false;
		} else if (prenom == null || prenom.trim().isEmpty()) {
			return false;
		}
		return true;
	}

	@Override
	public Client obtenirClient(long idClient) {
		return clientDao.findOne(idClient);
	}

	@Override
	public List<Client> obtenirTousClients() {
		return clientDao.findAll();
	};

	@Override
	public List<Client> obtenirClientsParIdConseiller(long idConseiller) {
		return clientDao.findByConseiller(idConseiller);
	}

	@Override
	public void modifierClient(Client client) throws ServiceException {
		if (client.getIdClient() == 0) {
			throw new ServiceException("Le client modifié doit avoir un ID.");
		} else {
			clientDao.save(client);
		}
	}

	@Override
	public void supprimerClient(long idClient) throws ServiceException {
		Client clientCandidat = this.obtenirClient(idClient);
		if (clientCandidat == null) {
			throw new ServiceException("Ce client n'existe pas !");
		} else {
			clientDao.delete(idClient);
		}
	}

	// *** GESTION CONSEILLERS ***

	@Override
	public void creerConseiller(Conseiller conseiller) {
		conseillerDao.save(conseiller);
	}

	@Override
	public Conseiller obtenirConseiller(long idConseiller) {
		Conseiller conseiller = conseillerDao.findOne(idConseiller);
		Set<Client> listeClients = conseiller.getListeClients();
		return conseillerDao.findOne(idConseiller);
	}

	@Override
	public Conseiller obtenirConseillerParAuth(String login, String password) {
		Conseiller conseiller = obtenirConseillerParLogin(login);
		if (pwdIsCorrect(conseiller, password)) {
			return conseiller;
		} else {
			return null;
		}
	}

	private Conseiller obtenirConseillerParLogin(String login) {
		return conseillerDao.findByLogin(login);
	}

	private boolean pwdIsCorrect(Conseiller conseiller, String password) {
		if (conseiller.getPassword().equals(password)) {
			return true;
		} else {
			return false;
		}
	}

	// *** GESTION COMPTES ***

	@Override
	public void AttribuerCompteEpargneClient(long idClient, CompteEpargne compteEpargne) throws ServiceException {
		// TODO Auto-generated method stub
		Client client = obtenirClient(idClient);
		if (client.getCompteEpargne() == null) {
			compteEpargne.setNumeroCompte(genererNumero());
			compteEpargne.setDateOuverture(today());
			client.setCompteEpargne(compteEpargne);
			clientDao.save(client);
		} else {
			throw new ServiceException("le client a déjà un compte epargne");
		}

	}

	@Override
	public void AttribuerCompteCourantClient(long idClient, CompteCourant compteCourant) throws ServiceException {
		Client client = obtenirClient(idClient);
		if (client.getCompteCourant() == null) {
			compteCourant.setNumeroCompte(genererNumero());
			compteCourant.setDateOuverture(today());
			client.setCompteCourant(compteCourant);
			clientDao.save(client);
		} else {
			throw new ServiceException("le client a déjà un compte courant");
		}
	}

	@Override
	public List<Compte> AfficherListeCompteClient(long idClient) {
		Client client = obtenirClient(idClient);
		List<Compte> listeCompte = new ArrayList<>();
		listeCompte.add(client.getCompteCourant());
		listeCompte.add(client.getCompteEpargne());
		return listeCompte;
	}

	@Override
	public void ModifierCompteEpargneClient(long idClient, CompteEpargne compteEpargneModif) {
		Client client = obtenirClient(idClient);
		client.setCompteEpargne(compteEpargneModif);
		clientDao.save(client);

	}

	@Override
	public void ModifierCompteCourantClient(long idClient, CompteCourant compteCourantModif) {
		Client client = obtenirClient(idClient);
		client.setCompteCourant(compteCourantModif);
		clientDao.save(client);

	}

	@Override
	public Compte AfficherCompteNumero(long numCompte) {
		return compteDAO.findOne(numCompte);
	}

	// *** OPERATIONS ***

	@Override
	public void VirementCompteACompte(long numCompteDepart, long numCompteArrivee, double montantTransfere)
			throws ServiceException {
		Compte compteDepart = AfficherCompteNumero(numCompteDepart);
		double soldecompteDepart = compteDepart.getSolde();
		Compte compteArrivee = AfficherCompteNumero(numCompteArrivee);
		double soldecompteArrivee = compteArrivee.getSolde();
		double limiteDecouvert;
		// methodologie pour récuperer le decouvert autorisé dans tous les cas
		// pas de découvert Autorisé présent dans le compte epargne
		if (CompteCourant.class.isInstance(compteDepart)) {
			//*-1.0 : découvert autorisé en positif dans la base 
			limiteDecouvert = -1.0*((CompteCourant) compteDepart).getDecouvertAutorise();
		} else {
			limiteDecouvert = limiteDecouvertAutoriseEpargne;
		}
		if ((compteDepart.getSolde() - montantTransfere) > limiteDecouvert) {
			compteDepart.setSolde(soldecompteDepart - montantTransfere);
			compteArrivee.setSolde(soldecompteArrivee + montantTransfere);
			compteDAO.save(compteDepart);
			compteDAO.save(compteArrivee);
		} else {
			throw new ServiceException("Virement refusé. Si réalisé, découvert autorisé du compte "
					+ compteDepart.getNumeroCompte() + "dépassé.");
		}

	}

	// *** METHODES ANNEXES ***

	private long genererNumero() {
		long randomNumber = (long) (Math.random() * 1_000_000_000);
		return randomNumber;
	}

	private String today() {
		SimpleDateFormat sdfDate = new SimpleDateFormat("yyyy-MM-dd");
		Date date = new Date();
		return sdfDate.format(date);
	}

}
