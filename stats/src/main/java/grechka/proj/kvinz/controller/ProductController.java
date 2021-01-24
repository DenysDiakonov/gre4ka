package grechka.proj.kvinz.controller;

import grechka.proj.kvinz.domain.Product;
import grechka.proj.kvinz.mapper.ProductMapper;
import grechka.proj.kvinz.model.ProductDTO;
import grechka.proj.kvinz.repository.CustomerRepository;
import grechka.proj.kvinz.controller.error_handler.custom_errors.ResourceNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping(value = "price-history")
@CrossOrigin
@AllArgsConstructor
public class ProductController {

    private final CustomerRepository customerRepository;

    private List<Product> productList;
    private List<ProductDTO> productDTOList;

    @GetMapping("/{title}")
    @ResponseStatus(HttpStatus.OK)
   public List<ProductDTO> getPrices(@PathVariable String title) throws ResourceNotFoundException{
        if(customerRepository.findByTitle(title).isEmpty()){
            throw  new ResourceNotFoundException("No info for this gre4ka");
        }
        productList = customerRepository.findByTitle(title);
        productDTOList = ProductMapper.INSTANCE.productListToProductDTO(productList);

        return productDTOList;
    }

}
