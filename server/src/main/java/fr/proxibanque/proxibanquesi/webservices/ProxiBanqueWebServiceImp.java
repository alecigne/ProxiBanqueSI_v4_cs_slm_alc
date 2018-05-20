package fr.proxibanque.proxibanquesi.webservices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fr.proxibanque.proxibanquesi.exceptions.ServiceException;
import fr.proxibanque.proxibanquesi.model.Client;
import fr.proxibanque.proxibanquesi.service.ProxiBanqueServiceImp;

@RestController
public class ProxiBanqueWebServiceImp implements GestionClientWebService {

	@Autowired
	ProxiBanqueServiceImp service;

	@Override
	@PostMapping(value = "/client/", produces = "application/json")
	public ResponseEntity<Client> creerClient(@RequestBody Client client) {
		try {
			service.creerClient(client);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (ServiceException e) {
			e.printStackTrace(); // TODO Remplacer par un log/AOP
			return new ResponseEntity<Client>(HttpStatus.BAD_REQUEST);
		}
	}

	@Override
	@GetMapping(value = "/client/{idClient}", produces = "application/json")
	public Client obtenirClient(@PathVariable long idClient) {
		return service.obtenirClient(idClient);
	}

	@Override
	@GetMapping(value = "/client/all", produces = "application/json")
	public List<Client> obtenirTousClients() {
		return service.obtenirTousClients();
	}

	@Override
	@PutMapping(value = "/client/", produces = "application/json")
	public ResponseEntity<Client> modifierClient(@RequestBody Client client) {
		try {
			service.modifierClient(client);
			return new ResponseEntity<Client>(HttpStatus.OK);
		} catch (ServiceException e) {
			e.printStackTrace(); // TODO AOP
			return new ResponseEntity<Client>(HttpStatus.BAD_REQUEST);
		}
	}

	@Override
	@DeleteMapping(value = "/client/{idClient}", produces = "application/json")
	public ResponseEntity<Client> supprimerClient(@PathVariable long idClient) {
		try {
			service.supprimerClient(idClient);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (ServiceException e) {
			e.printStackTrace(); // TODO Remplacer par l'AOP
			return new ResponseEntity<Client>(HttpStatus.BAD_REQUEST);
		}
	}

}
