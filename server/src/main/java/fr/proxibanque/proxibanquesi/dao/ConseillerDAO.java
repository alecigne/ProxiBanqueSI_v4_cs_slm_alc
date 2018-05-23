package fr.proxibanque.proxibanquesi.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.proxibanque.proxibanquesi.model.Conseiller;

@Repository
public interface ConseillerDAO extends JpaRepository<Conseiller, Long> {
	
	Conseiller findByLogin(String login);
	
}
