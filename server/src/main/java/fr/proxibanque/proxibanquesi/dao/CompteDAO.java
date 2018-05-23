package fr.proxibanque.proxibanquesi.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.proxibanque.proxibanquesi.model.Compte;

/**
 * Opérations générales liées à la persistance des données liées aux comptes
 * ProxiBanque. Cette classe utilise les potentialités offertes par les
 * interfaces de base de Spring Data, ce qui permet d'éviter l'inclusion de code
 * de bas niveau.
 * 
 * @author Clothilde Szymezak, Sandrine Le Mentec, Anthony Le Cigne
 *
 */
@Repository("compteDAO")
public interface CompteDAO extends JpaRepository<Compte, Long> {
}
