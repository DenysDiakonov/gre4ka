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

    private List<Product> productList = new ArrayList<>();

    private Product[] products;

    @Override
    public List<Product> getGre4ka(String URL) {

        ResponseEntity<String> response = restTemplate.getForEntity(URL,String.class);
        if(response.getStatusCode() == HttpStatus.OK){
            ProductDTO[] ProductDTOs = restTemplate.getForObject(URL,ProductDTO[].class);
            products = ProductMapper.INSTANCE.productDTOArraytoProduct(ProductDTOs);
        }
        productList.addAll(Arrays.asList(products));
        return productList;
    }
}
