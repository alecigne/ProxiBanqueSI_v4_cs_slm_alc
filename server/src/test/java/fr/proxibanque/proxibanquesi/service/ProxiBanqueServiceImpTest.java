package fr.proxibanque.proxibanquesi.service;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.anyLong;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.mockito.Mockito.*;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import fr.proxibanque.proxibanquesi.config.SpringConfig;
import fr.proxibanque.proxibanquesi.dao.ClientDAO;
import fr.proxibanque.proxibanquesi.exceptions.ServiceException;
import fr.proxibanque.proxibanquesi.model.Client;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = { SpringConfig.class })
@WebAppConfiguration
public class ProxiBanqueServiceImpTest {

	private static final Client DUMMY_CLIENT = new Client("Dufour", "Clémence", "clemence@dufour.com",
			"65 rue des Soeurs", "93120", "La Courneuve", "0188839297");

	/**
	 * Injection des champs notés "@Mock" dans l'objet testé.
	 * 
	 * cf. https://stackoverflow.com/a/25894297
	 */
	@InjectMocks
	ProxiBanqueServiceImp pbs;
	
	/**
	 * Utilisation d'une DAO bouchon pour les tests du service afin de ne pas
	 * appeler les méthodes de persistance.
	 */
	@Mock
	ClientDAO clientDao;

	@Before
	public void setup() {
		MockitoAnnotations.initMocks(this);
		pbs = new ProxiBanqueServiceImp();
		pbs.setClientDao(clientDao);
	}

	// *** creerClient ***

	/**
	 * Si le client est null, le service doit renvoyer une exception de type
	 * ServiceException.
	 */
	@Test(expected = ServiceException.class)
	public void creerClient_Retourne_ServiceException_Si_Client_Null() throws ServiceException {
		pbs.creerClient(null);
	}

	// *** obtenirClient ***

	/**
	 * Test de fiabilité basique de la méthode obtenirClient : si la DAO retourne un
	 * objet client, le service doit retourner un objet client identique d'un point
	 * de vue métier.
	 */
	@Test
	public void obtenirClient_Retourne_Client_Inaltere() {
		when(clientDao.findOne(anyLong())).thenReturn(DUMMY_CLIENT);
		Client client = pbs.obtenirClient(1L);
		assertEquals(DUMMY_CLIENT, client);
		// verify(clientDao).findOne(idClient);
	}

}
