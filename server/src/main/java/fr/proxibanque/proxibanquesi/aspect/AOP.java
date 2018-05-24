package fr.proxibanque.proxibanquesi.aspect;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class AOP {

	private static Logger bankingLogger = LoggerFactory.getLogger("banking");

	@After("execution(* fr.proxibanque.proxibanquesi.service.ProxiBanqueServiceImp.VirementCompteACompte(..))")
	public void virementEffectue() {
		bankingLogger.warn("Virement bancaire effectué.");
	}

}
