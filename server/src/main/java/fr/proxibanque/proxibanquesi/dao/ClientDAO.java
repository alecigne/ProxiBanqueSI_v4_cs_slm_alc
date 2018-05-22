package fr.proxibanque.proxibanquesi.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import fr.proxibanque.proxibanquesi.model.Client;

@Repository("clientDAO")
public interface ClientDAO extends JpaRepository<Client, Long> {

	@Query(value = "SELECT * FROM CLIENT WHERE CONSEILLER_ID = ?1", nativeQuery = true)
	List<Client> findByConseiller(long idConseiller);
	
}
