package fr.proxibanque.proxibanquesi.webservices;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import fr.proxibanque.proxibanquesi.exceptions.ServiceException;
import fr.proxibanque.proxibanquesi.model.Client;
import fr.proxibanque.proxibanquesi.model.Compte;
import fr.proxibanque.proxibanquesi.model.CompteCourant;
import fr.proxibanque.proxibanquesi.model.CompteEpargne;
import fr.proxibanque.proxibanquesi.model.Conseiller;
import fr.proxibanque.proxibanquesi.model.Virement;
import fr.proxibanque.proxibanquesi.service.ProxiBanqueServiceImp;

@RestController
public class ProxiBanqueWebServiceImp
		implements GestionClientWebService, GestionCompteWebService, SIWebService, GestionConseillerWebService {

	@Autowired
	ProxiBanqueServiceImp service;
	private static Logger LOGGER = LoggerFactory.getLogger(ProxiBanqueWebServiceImp.class);

	@Override
	@PostMapping(value = "/client/", produces = "application/json")
	public ResponseEntity<Client> creerClient(@RequestBody Client client) {
		try {
			service.creerClient(client);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (ServiceException e) {
			LOGGER.warn("exception thrown", e);
			return new ResponseEntity<Client>(HttpStatus.BAD_REQUEST);
		}
	}

	@PostMapping(value = "/conseiller/{idConseiller}/client/", produces = "application/json")
	public ResponseEntity<Client> creerClientAvecConseiller(@RequestBody Client client,
			@PathVariable long idConseiller) {
		try {

			service.creerClientAvecConseiller(client, idConseiller);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (ServiceException e) {
			LOGGER.warn("exception thrown", e);
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
			LOGGER.warn("exception thrown", e);
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
			LOGGER.warn("exception thrown", e);
			return new ResponseEntity<Client>(HttpStatus.BAD_REQUEST);
		}
	}

	@Override
	@PostMapping(value = "/client/{idClient}/CompteEpargne", produces = "application/json")
	public ResponseEntity<CompteEpargne> attribuerCompteEpargneClient(@PathVariable long idClient,
			@RequestBody CompteEpargne compteEpargne) {
		//
		try {
			service.attribuerCompteEpargneClient(idClient, compteEpargne);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			LOGGER.warn("exception thrown", e);
			return new ResponseEntity<CompteEpargne>(HttpStatus.BAD_REQUEST);
		}
	}

	@Override
	@PostMapping(value = "/client/{idClient}/CompteCourant", produces = "application/json")
	public ResponseEntity<CompteCourant> attribuerCompteCourantClient(@PathVariable long idClient,
			@RequestBody CompteCourant compteCourant) {
		try {
			service.attribuerCompteCourantClient(idClient, compteCourant);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (ServiceException e) {
			LOGGER.warn("exception thrown", e);
			return new ResponseEntity<CompteCourant>(HttpStatus.BAD_REQUEST);
			// TODO: integration AOP
		}
	}

	@Override
	@GetMapping(value = "client/{idClient}/comptes", produces = "application/json")
	public List<Compte> afficherListeCompteClient(@PathVariable long idClient) {
		return service.afficherListeCompteClient(idClient);
	}

	@Override
	@GetMapping(value = "compte/{numCompte}")
	public Compte afficherCompteNumero(@PathVariable long numCompte) {
		return service.afficherCompteNumero(numCompte);
	}

	@Override
	@PutMapping(value = "client/{idClient}/CompteCourant/{numCompte}", produces = "application/json")
	public ResponseEntity<Compte> modifierCompteCourant(@PathVariable long idClient,
			@RequestBody CompteCourant compteCourantModif) {
		try {
			service.modifierCompteCourantClient(idClient, compteCourantModif);
			return new ResponseEntity<Compte>(HttpStatus.OK);
		} catch (ServiceException e) {
			e.printStackTrace(); // TODO AOP
			return new ResponseEntity<Compte>(HttpStatus.BAD_REQUEST);
		}
	}

	@Override
	@PutMapping(value = "client/{idClient}/CompteEpargne/{numCompte}", produces = "application/json")
	public ResponseEntity<Compte> modifierCompteEpargne(@PathVariable long idClient,
			@RequestBody CompteEpargne compteEpargneModif) {
		try {
			service.modifierCompteEpargneClient(idClient, compteEpargneModif);
			return new ResponseEntity<Compte>(HttpStatus.OK);
		} catch (ServiceException e) {
			e.printStackTrace(); // TODO AOP
			return new ResponseEntity<Compte>(HttpStatus.BAD_REQUEST);
		}
	}

	@Override
	@DeleteMapping(value = "client/{idClient}/CompteCourant")
	public ResponseEntity<Compte> supprimerCompteCourant(@PathVariable long idClient) {
		try {
			service.supprimerCompteCourantClient(idClient);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (ServiceException e) {
			e.printStackTrace(); // TODO Remplacer par l'AOP
			return new ResponseEntity<Compte>(HttpStatus.BAD_REQUEST);
		}

	}

	@Override
	@DeleteMapping(value = "/client/{idClient}/CompteEpargne")
	public ResponseEntity<Compte> supprimerCompteEpargne(@PathVariable long idClient) {
		try {
			service.supprimerCompteEpargneClient(idClient);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (ServiceException e) {
			e.printStackTrace(); // TODO Remplacer par l'AOP
			return new ResponseEntity<Compte>(HttpStatus.BAD_REQUEST);
		}
	}

	@Override

	@PutMapping(value = "virement", produces = "application/json")
	public void virementCompteACompte(@RequestBody Virement virementdata) {
		try {
			System.out.println(virementdata.toString());
			service.virementCompteACompte(virementdata.getNumCompteDepart(), virementdata.getNumCompteArrivee(),
					virementdata.getMontantTransfere());
		} catch (ServiceException e) {
			LOGGER.warn("exception thrown", e);

		}
	}

	@Override
	@GetMapping(value = "/conseiller/{login}/{password}", produces = "application/json")
	public Conseiller obtenirConseillerParAuth(@PathVariable String login, @PathVariable String password) {
		return service.obtenirConseillerParAuth(login, password);
	}

	@Override
	@GetMapping(value = "/audit", produces = "application/json")
	public List<Client> auditerAgence() {
		return service.auditerAgence();
	}

	@Override
	@PutMapping(value = "creditercompte/{numCompte}/{montant}")
	public void crediterCompte(@PathVariable long numCompte, @PathVariable double montant) {
		try {
			service.crediterCompte(numCompte, montant);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	@GetMapping(value = "/credit/{montant}/{dureeMois}/{taux}/", produces = "application/json")
	public double simulerCredit(@PathVariable double montant, @PathVariable int dureeMois, @PathVariable double taux) {
		return service.simulerCredit(montant, dureeMois, taux);

	}

}
