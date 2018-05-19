package fr.proxibanque.proxibanquesi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.proxibanque.proxibanquesi.dao.ClientDAO;
import fr.proxibanque.proxibanquesi.model.Client;

@Service("service")
public class AppServiceImp implements AppService {

	@Autowired
	ClientDAO clientDao;
	
	public void setClientDao(ClientDAO clientDao) {
		this.clientDao = clientDao;
	}

	@Override
	public void creerClient(Client client) {
		clientDao.save(client);
	}

	@Override
	public Client obtenirClient(long idClient) {
		return clientDao.findOne(idClient);
	}

	@Override
	public List<Client> obtenirTousClients() {
		return clientDao.findAll();
	}

	@Override
	public void modifierClient(Client client) {
		clientDao.save(client);
	}

	@Override
	public void supprimerClient(long idClient) {
		clientDao.delete(idClient);
	}

}
