package grechka.proj.kvinz.service;

import grechka.proj.kvinz.domain.Product;
import grechka.proj.kvinz.mapper.ProductMapper;
import grechka.proj.kvinz.model.ProductDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class Gre4kaCheckerImpl implements Gre4kaChecker {

    private final RestTemplate restTemplate = new RestTemplate();

    private static final String GET_METRO = "http://localhost:8000/api/metro/";

    private static final String GET_ATB = "http://localhost:8000/api/atb/";

    private static final String GET_NOVUS = "http://localhost:8000/api/novus/";

    private List<Product> productList = new ArrayList<>();

    private Product[] metroProducts;

    private Product[] atbProducts;

    private Product[] novusProducts;

    @Override
    public List<Product> getGre4ka() {
        ResponseEntity<String> responseMetro = restTemplate.getForEntity(GET_METRO,String.class);
        if(responseMetro.getStatusCode() == HttpStatus.OK){
            ProductDTO[] metroProductDTOs = restTemplate.getForObject(GET_METRO,ProductDTO[].class);
            metroProducts = ProductMapper.INSTANCE.productDTOArraytoProduct(metroProductDTOs);
        }
        ResponseEntity<String> responseATB = restTemplate.getForEntity(GET_ATB,String.class);
        if(responseATB.getStatusCode() == HttpStatus.OK){
            ProductDTO[] atbProductDTOs = restTemplate.getForObject(GET_ATB,ProductDTO[].class);
            atbProducts = ProductMapper.INSTANCE.productDTOArraytoProduct(atbProductDTOs);
        }
        ResponseEntity<String> responseNovus = restTemplate.getForEntity(GET_NOVUS,String.class);
        if(responseNovus.getStatusCode() == HttpStatus.OK){
            ProductDTO[] novusProductDTOs = restTemplate.getForObject(GET_NOVUS,ProductDTO[].class);
            novusProducts = ProductMapper.INSTANCE.productDTOArraytoProduct(novusProductDTOs);
        }

        productList.addAll(Arrays.asList(metroProducts));
        productList.addAll(Arrays.asList(atbProducts));
        productList.addAll(Arrays.asList(novusProducts));

        return productList;
    }
}
