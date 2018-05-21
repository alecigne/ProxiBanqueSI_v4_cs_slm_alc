package fr.proxibanque.proxibanquesi.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.proxibanque.proxibanquesi.model.Compte;

@Repository("compteDAO")
public interface CompteDAO extends JpaRepository<Compte, Long>{

}
