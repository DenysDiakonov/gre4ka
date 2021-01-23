package grechka.proj.kvinz.mapper;

import grechka.proj.kvinz.domain.Product;
import grechka.proj.kvinz.model.ProductDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface ProductMapper {
    ProductMapper INSTANCE = Mappers.getMapper(ProductMapper.class);

    ProductDTO productToProductDTO(Product product);
    Product productDTOToProduct(ProductDTO productDTO);
    Product[] productDTOArraytoProduct(ProductDTO[] productDTOS);
    List<ProductDTO> productListToProductDTO(List<Product> productList);
}
