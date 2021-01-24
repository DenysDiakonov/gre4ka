package grechka.proj.kvinz.service;


import grechka.proj.kvinz.domain.Product;
import grechka.proj.kvinz.repository.CustomerRepository;
import lombok.Data;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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

    private static final String GET_METRO = "https://gre4ka-backend.herokuapp.com/api/metro/";

    private static final String GET_ATB = "https://gre4ka-backend.herokuapp.com/api/atb/";

    private static final String GET_NOVUS = "https://gre4ka-backend.herokuapp.com/api/novus/";

    private static final String GET_SILPO = "https://gre4ka-backend.herokuapp.com/api/silpo/";

    @Scheduled(fixedRate = 6*60*60*1000)
    public void reportCurrentTime(){
        productList.addAll(gre4kaChecker.getGre4ka(GET_METRO));
        productList.addAll(gre4kaChecker.getGre4ka(GET_ATB));
        productList.addAll(gre4kaChecker.getGre4ka(GET_NOVUS));
        productList.addAll(gre4kaChecker.getGre4ka(GET_SILPO));
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
