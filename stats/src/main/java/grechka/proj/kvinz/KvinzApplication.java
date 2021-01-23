package grechka.proj.kvinz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class KvinzApplication {

    public static void main(String[] args) {
        SpringApplication.run(KvinzApplication.class, args);
    }

}
