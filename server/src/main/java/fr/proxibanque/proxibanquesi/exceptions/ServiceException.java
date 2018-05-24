package fr.proxibanque.proxibanquesi.exceptions;

public class ServiceException extends Exception {

	/**
	 * Classe Exception utilisée par le service.
	 * @param message : permet d'afficher un message défini en fonction des erreurs
	 */
	public ServiceException(String message) {
		super(message);
	}

}
