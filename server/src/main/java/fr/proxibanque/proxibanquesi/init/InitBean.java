package fr.proxibanque.proxibanquesi.init;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import fr.proxibanque.proxibanquesi.model.CarteBancaire;
import fr.proxibanque.proxibanquesi.model.Client;
import fr.proxibanque.proxibanquesi.model.CompteCourant;
import fr.proxibanque.proxibanquesi.model.CompteEpargne;
import fr.proxibanque.proxibanquesi.model.Conseiller;
import fr.proxibanque.proxibanquesi.service.ProxiBanqueServiceImp;

@Component
public class InitBean implements InitializingBean {

	@Autowired
	ProxiBanqueServiceImp pbs;

	@Override
	public void afterPropertiesSet() throws Exception {
		// Client 1
		Client client1 = new Client("Dupont1", "Michel", "michel@dupont1.com", "1 rue de la Source", "75001", "Paris",
				"0100000001");
		CompteCourant cc1 = new CompteCourant(1001, 1000.0, "2018-05-20");
		CarteBancaire cb1 = new CarteBancaire(1001, CarteBancaire.TypeCarte.ELECTRON);
		cc1.setCarteBancaire(cb1);
		CompteEpargne ce1 = new CompteEpargne(2001, 1000.0, "2018-05-20", 0.03);
		client1.setCompteCourant(cc1);
		client1.setCompteEpargne(ce1);

		// Client 2
		Client client2 = new Client("Dupont2", "Michel", "michel@dupont2.com", "2 rue de la Source", "75002", "Paris",
				"0100000002");
		CompteCourant cc2 = new CompteCourant(1002, 1000.0, "2018-05-20");
		CarteBancaire cb2 = new CarteBancaire(1002, CarteBancaire.TypeCarte.PREMIER);
		cc2.setCarteBancaire(cb2);
		CompteEpargne ce2 = new CompteEpargne(2002, 1000.0, "2018-05-20", 0.03);
		client2.setCompteCourant(cc2);
		client2.setCompteEpargne(ce2);
		
		// Client 3
		Client client3 = new Client("Dupont3", "Michel", "michel@dupont3.com", "3 rue de la Source", "75003", "Paris",
				"0100000003");
		CompteCourant cc3 = new CompteCourant(1003, 1000.0, "2018-05-20");
		CarteBancaire cb3 = new CarteBancaire(1003, CarteBancaire.TypeCarte.ELECTRON);
		cc3.setCarteBancaire(cb3);
		CompteEpargne ce3 = new CompteEpargne(2003, 1000.0, "2018-05-20", 0.03);
		client3.setCompteCourant(cc3);
		client3.setCompteEpargne(ce3);

		// Client 4
		Client client4 = new Client("Dupont4", "Michel", "michel@dupont4.com", "4 rue de la Source", "75004", "Paris",
				"0100000004");
		CompteCourant cc4 = new CompteCourant(1004, 1000.0, "2018-05-20");
		CarteBancaire cb4 = new CarteBancaire(1004, CarteBancaire.TypeCarte.PREMIER);
		cc4.setCarteBancaire(cb4);
		CompteEpargne ce4 = new CompteEpargne(2004, 1000.0, "2018-05-20", 0.03);
		client4.setCompteCourant(cc4);
		client4.setCompteEpargne(ce4);

		// Conseiller 1
		Conseiller conseiller1 = new Conseiller("Durand1", "Jacques", "jdurand1", "1234");
		conseiller1.getListeClients().add(client1);
		conseiller1.getListeClients().add(client2);
		pbs.creerConseiller(conseiller1);
		
		// Conseiller 2
		Conseiller conseiller2 = new Conseiller("Durand2", "Jacques", "jdurand2", "1234");
		conseiller2.getListeClients().add(client3);
		conseiller2.getListeClients().add(client4);
		pbs.creerConseiller(conseiller2);

		// try {
		// creerClient(client1);
		// creerClient(client2);
		// } catch (ServiceException e) {
		// e.printStackTrace();
		// }
	}
}
