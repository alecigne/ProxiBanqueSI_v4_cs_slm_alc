package fr.proxibanque.proxibanquesi.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.proxibanque.proxibanquesi.model.Client;

@Repository
public interface ClientDAO extends JpaRepository<Client, Long>{

}
