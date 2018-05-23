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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.proxibanque.proxibanquesi.exceptions.ServiceException;
import fr.proxibanque.proxibanquesi.model.Client;
import fr.proxibanque.proxibanquesi.model.Compte;
import fr.proxibanque.proxibanquesi.model.CompteCourant;
import fr.proxibanque.proxibanquesi.model.CompteEpargne;
import fr.proxibanque.proxibanquesi.model.Conseiller;
import fr.proxibanque.proxibanquesi.service.ProxiBanqueServiceImp;

@RestController
public class ProxiBanqueWebServiceImp
		implements GestionClientWebService, GestionCompteWebService, SIWebService, GestionConseillerWebService {

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
	
	@PostMapping(value = "/conseiller/{idConseiller}/client/", produces = "application/json")
	public ResponseEntity<Client> creerClientAvecConseiller(@RequestBody Client client, @PathVariable long idConseiller) {
		try {
			
			service.creerClientAvecConseiller(client, idConseiller);
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
	@GetMapping(value = "/client/{idConseiller}/all", produces = "application/json")
	public List<Client> obtenirClientsParIdConseiller(@PathVariable long idConseiller) {
		return service.obtenirClientsParIdConseiller(idConseiller);
	}

	@Override
	@PutMapping(value = "/conseiller/{idConseiller}/client/{idClient}", produces = "application/json")
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

	@Override
	@PostMapping(value = "/client/{idClient}/CompteEpargne/", produces = "application/json")
	public ResponseEntity<CompteEpargne> AttribuerCompteEpargneClient(@PathVariable long idClient,
			@RequestBody CompteEpargne compteEpargne) {
		//
		try {
			service.AttribuerCompteEpargneClient(idClient, compteEpargne);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<CompteEpargne>(HttpStatus.BAD_REQUEST);
			// TODO: integration AOP
		}
	}

	@Override
	@PostMapping(value = "/client/{idClient}/CompteCourant/", produces = "application/json")
	public ResponseEntity<CompteCourant> AttribuerCompteCourantClient(@PathVariable long idClient,
			@RequestBody CompteCourant compteCourant) {
		try {
			service.AttribuerCompteCourantClient(idClient, compteCourant);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<CompteCourant>(HttpStatus.BAD_REQUEST);
			// TODO: integration AOP
		}
	}

	@Override
	@GetMapping(value = "/client/{idClient}/comptes", produces = "application/json")
	public List<Compte> AfficherListeCompteClient(@PathVariable long idClient) {
		return service.AfficherListeCompteClient(idClient);
	}

	@Override
	@GetMapping(value = "compte/{numCompte}")
	public Compte AfficherCompteNumero(@PathVariable long numCompte) {
		// TODO Auto-generated method stub
		return service.AfficherCompteNumero(numCompte);
	}

	@Override
	@PutMapping(value = "virement/{numCompteDepart}/{numCompteArrivee}/{montantTransfere}")
	public void VirementCompteACompte(@PathVariable long numCompteDepart, @PathVariable long numCompteArrivee,
			@PathVariable double montantTransfere) {
		try {
			service.VirementCompteACompte(numCompteDepart, numCompteArrivee, montantTransfere);
		} catch (Exception e) {
			e.printStackTrace();

		}
	}

	@Override
	@GetMapping(value = "/conseiller/{login}/{password}", produces = "application/json")
	public Conseiller obtenirConseillerParAuth(@PathVariable String login, @PathVariable String password) {
		return service.obtenirConseillerParAuth(login, password);
	}

	@Override
	@PutMapping(value= "creditercompte/{numCompte}/{montant}")
	public void CrediterCompte(@PathVariable long numCompte, @PathVariable double montant) {
		try {
			service.CrediterCompte(numCompte, montant);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

}
