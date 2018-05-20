package fr.proxibanque.proxibanquesi.service;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.proxibanque.proxibanquesi.dao.ClientDAO;
import fr.proxibanque.proxibanquesi.exceptions.ServiceException;
import fr.proxibanque.proxibanquesi.model.Client;
import fr.proxibanque.proxibanquesi.model.CompteCourant;

@Service("service")
public class AppServiceImp implements AppService {

	@Autowired
	ClientDAO clientDao;

//	public void setClientDao(ClientDAO clientDao) {
//		this.clientDao = clientDao;
//	}
	
	@PostConstruct
	public void populateDataBase(){
		Client client1 = new Client("Dupont1", "Michel", "1 rue de la Source", "75001", "Paris", "0100000001");
		CompteCourant cc1 = new CompteCourant(0001, 1000.0, "2018-05-20");
		client1.setCompteCourant(cc1);
		Client client2 = new Client("Dupont2", "Michel", "2 rue de la Source", "75002", "Paris", "0100000002");
		CompteCourant cc2 = new CompteCourant(0002, 1000.0, "2018-05-20");
		client1.setCompteCourant(cc1);
		client2.setCompteCourant(cc2);
		try {
			creerClient(client1);
			creerClient(client2);
		} catch (ServiceException e) {
			e.printStackTrace();
		}
	}

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
	public void modifierClient(Client client) {
		clientDao.save(client);
	}

	@Override
	public void supprimerClient(long idClient) {
		clientDao.delete(idClient);
	}

}
