package fr.proxibanque.proxibanquesi.webservices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import fr.proxibanque.proxibanquesi.model.Client;
import fr.proxibanque.proxibanquesi.service.AppServiceImp;

@RestController
public class MyControllerImp implements MyController {
	
	@Autowired
	AppServiceImp service;

	@Override
	public List<Client> getAllClients() {
		return service.obtenirTousClients();
	}

}
