package com.fashionpoint;

import com.fashionpoint.components.UserComponent;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class FashionPointApplication {

	public static void main(String[] args) {
	ConfigurableApplicationContext configurableApplicationContext  =	SpringApplication.run(FashionPointApplication.class, args);
		UserComponent userComponent = configurableApplicationContext.getBean(UserComponent.class);
		userComponent.init();
		System.out.println("Data Added");
	}

}
