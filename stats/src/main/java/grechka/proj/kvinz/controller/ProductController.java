package grechka.proj.kvinz.controller;

import grechka.proj.kvinz.domain.Product;
import grechka.proj.kvinz.mapper.ProductMapper;
import grechka.proj.kvinz.model.ProductDTO;
import grechka.proj.kvinz.repository.CustomerRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "price-history")
@AllArgsConstructor
@CrossOrigin
public class ProductController {

    private final CustomerRepository customerRepository;

    private List<Product> productList;
    private List<ProductDTO> productDTOList;

    @GetMapping("/{title}")
   public List<ProductDTO> getPrices(@PathVariable String title){
        productList = customerRepository.findByTitle(title);
        productDTOList = ProductMapper.INSTANCE.productListToProductDTO(productList);
        return productDTOList;
    }

}
