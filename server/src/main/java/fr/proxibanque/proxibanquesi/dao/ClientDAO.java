package fr.proxibanque.proxibanquesi.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import fr.proxibanque.proxibanquesi.model.Client;

/**
 * Opérations générales liées à la persistance des données liées aux clients
 * ProxiBanque. Cette classe utilise les potentialités offertes par les
 * interfaces de base de Spring Data, ce qui permet d'éviter l'inclusion de code
 * de bas niveau.
 * 
 * @author Clothilde Szymezak, Sandrine Le Mentec, Anthony Le Cigne
 *
 */
@Repository("clientDAO")
public interface ClientDAO extends JpaRepository<Client, Long> {

	/**
	 * Permet de trouver un client en base selon l'ID de son conseiller. La requête
	 * native est nécessaire étant donnée la nature unidirectionnelle de la relation
	 * entre client et conseiller.
	 * 
	 * @param idConseiller
	 * @return
	 */
	@Query(value = "SELECT * FROM CLIENT WHERE CONSEILLER_ID = ?1", nativeQuery = true)
	List<Client> findByConseiller(long idConseiller);

}
