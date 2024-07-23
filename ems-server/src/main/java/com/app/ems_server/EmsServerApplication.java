package com.app.ems_server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmsServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmsServerApplication.class, args);
		System.out.println("Server Runing......");
		System.out.println("http://localhost:" + 7890);
	}

}
