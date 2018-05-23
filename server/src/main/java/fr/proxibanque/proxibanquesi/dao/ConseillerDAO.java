package fr.proxibanque.proxibanquesi.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.proxibanque.proxibanquesi.model.Conseiller;

/**
 * Opérations générales liées à la persistance des données liées aux conseillers
 * ProxiBanque. Cette classe utilise les potentialités offertes par les
 * interfaces de base de Spring Data, ce qui permet d'éviter l'inclusion de code
 * de bas niveau.
 * 
 * @author Clothilde Szymezak, Sandrine Le Mentec, Anthony Le Cigne
 *
 */
@Repository
public interface ConseillerDAO extends JpaRepository<Conseiller, Long> {

	/**
	 * Permet de trouver un conseiller en base selon son login.
	 * 
	 * @param login
	 *            Login du conseiller
	 * @return Object Conseiller
	 */
	Conseiller findByLogin(String login);

}
