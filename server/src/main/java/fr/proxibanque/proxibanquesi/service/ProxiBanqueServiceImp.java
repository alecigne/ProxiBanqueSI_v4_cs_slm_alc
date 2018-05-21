package fr.proxibanque.proxibanquesi.service;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.proxibanque.proxibanquesi.dao.ClientDAO;
import fr.proxibanque.proxibanquesi.dao.ConseillerDAO;
import fr.proxibanque.proxibanquesi.exceptions.ServiceException;
import fr.proxibanque.proxibanquesi.model.Agence;
import fr.proxibanque.proxibanquesi.model.CarteBancaire;
import fr.proxibanque.proxibanquesi.model.Client;
import fr.proxibanque.proxibanquesi.model.CompteCourant;
import fr.proxibanque.proxibanquesi.model.Conseiller;
import fr.proxibanque.proxibanquesi.model.Gerant;

@Service("service")
public class ProxiBanqueServiceImp implements GestionClientService, GestionConseillerService {

	// *** ATTRIBUTS ***
	
	@Autowired
	ClientDAO clientDao;
	@Autowired
	ConseillerDAO conseillerDao;

	// TODO Données temporaires - à retirer
	@PostConstruct
	public void populateDataBase() {

		// Client 1
		Client client1 = new Client("Dupont1", "Michel", "michel@dupont1.com", "1 rue de la Source", "75001", "Paris",
				"0100000001");
		CompteCourant cc1 = new CompteCourant(0001, 1000.0, "2018-05-20");
		CarteBancaire cb1 = new CarteBancaire(1, CarteBancaire.TypeCarte.ELECTRON);
		cc1.setCarteBancaire(cb1);
		client1.setCompteCourant(cc1);

		// Client 2
		Client client2 = new Client("Dupont2", "Michel", "michel@dupont2.com", "2 rue de la Source", "75002", "Paris",
				"0100000002");
		CompteCourant cc2 = new CompteCourant(0002, 1000.0, "2018-05-20");
		CarteBancaire cb2 = new CarteBancaire(2, CarteBancaire.TypeCarte.PREMIER);
		cc2.setCarteBancaire(cb2);
		client2.setCompteCourant(cc2);
		
		// Conseiller
		
		Conseiller conseiller = new Conseiller("Durand", "Jacques", "jdurand", "1234");
		conseiller.getListeClients().add(client1);
		conseiller.getListeClients().add(client2);
		creerConseiller(conseiller);

//		try {
//			creerClient(client1);
//			creerClient(client2);
//		} catch (ServiceException e) {
//			e.printStackTrace();
//		}
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

	// Helpers

	private boolean clientEstValide(Client client) {
		if (client == null) {
			return false;
		} else if (client.getNom() == null || client.getNom().isEmpty()) {
			return false;
		} else if (client.getPrenom() == null || client.getPrenom().isEmpty()) {
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
	
}
