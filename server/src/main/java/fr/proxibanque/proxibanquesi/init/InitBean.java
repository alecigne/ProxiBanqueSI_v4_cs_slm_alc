package fr.proxibanque.proxibanquesi.init;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import fr.proxibanque.proxibanquesi.model.CarteBancaire;
import fr.proxibanque.proxibanquesi.model.Client;
import fr.proxibanque.proxibanquesi.model.CompteCourant;
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
		pbs.creerConseiller(conseiller);

		// try {
		// creerClient(client1);
		// creerClient(client2);
		// } catch (ServiceException e) {
		// e.printStackTrace();
		// }
	}
}
