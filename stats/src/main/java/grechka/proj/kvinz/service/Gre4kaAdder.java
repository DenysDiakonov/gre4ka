package grechka.proj.kvinz.service;


import grechka.proj.kvinz.domain.Product;
import grechka.proj.kvinz.repository.CustomerRepository;
import lombok.Data;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Component
@Data
public class Gre4kaAdder {

    private final CustomerRepository customerRepository;

    private final Gre4kaChecker gre4kaChecker;

    private static final Logger log = LoggerFactory.getLogger(Gre4kaAdder.class);

    private List<Product> productList = new ArrayList<>();

    @Scheduled(fixedRate = 60*60*6000)
    public void reportCurrentTime(){
        productList = gre4kaChecker.getGre4ka();
        if(!productList.isEmpty()){
            for(Product product: productList){
                product.setDateCreated(new Date());
                log.info("----GRE4KA----");
                log.info(product.toString());
                customerRepository.save(product);
            }
        }
    }
}
