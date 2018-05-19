//package fr.proxibanque.proxibanquesi.config;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//
//	@Autowired
//	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
//	  auth.inMemoryAuthentication().withUser("user").password("1234").roles("USER");
//	}
//
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//	  http
//	  	.authorizeRequests()
//		.antMatchers("/**").access("hasRole('ROLE_USER')")
//		.and().httpBasic();
//	}
//	
////	@Override
////    protected void configure(HttpSecurity http) throws Exception {
////        http
////          .authorizeRequests()
////          .antMatchers("/login*").anonymous()
////          .anyRequest().authenticated()
////          .and()
////          .formLogin()
////          .loginPage("/login.html")
////          .defaultSuccessUrl("/homepage.html")
////          .failureUrl("/login.html?error=true")
////          .and()
////          .logout().logoutSuccessUrl("/login.html");
//}