package fr.proxibanque.proxibanquesi.webservices;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;

import fr.proxibanque.proxibanquesi.model.Client;

public interface MyController {
	
	@GetMapping(value="/clients", produces="application/json")
	List<Client> getAllClients();
	
}
