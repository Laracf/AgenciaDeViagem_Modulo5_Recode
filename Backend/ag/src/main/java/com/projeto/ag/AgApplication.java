package com.projeto.ag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.projeto.ag.entities.Cliente;
import com.projeto.ag.repositorys.ClienteRepository;


@SpringBootApplication
public class AgApplication implements CommandLineRunner{
	
	@Autowired
	private ClienteRepository clienteRepository;
	public static void main(String[] args) {
		SpringApplication.run(AgApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		Cliente c1 = new Cliente(null, "Lara", "17/03/2022", "22/04/2022", "Recife" , 2.500);
		Cliente c2 = new Cliente(null, "Lucas", "05/05/2022", "09/08/2022", "Pará" , 4.500);
		
		clienteRepository.save(c1);
		clienteRepository.save(c2);	
			
	}
}
