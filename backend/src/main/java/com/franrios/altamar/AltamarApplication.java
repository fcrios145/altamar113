package com.franrios.altamar;

import com.franrios.altamar.dto.FileStorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({
		FileStorageProperties.class
})
public class AltamarApplication {

	public static void main(String[] args) {
		SpringApplication.run(AltamarApplication.class, args);
	}

}
