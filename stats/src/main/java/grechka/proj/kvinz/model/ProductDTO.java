package grechka.proj.kvinz.model;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.Date;

@Data
public class ProductDTO {
    private Long id;
    private String title;
    private String weight;
    private String image;
    private String link;
    private String shop;
    private Double price;
    @JsonProperty("price_for_kilo")
    private Double priceForKilo;
    @JsonProperty("date_created")
    private Date dateCreated;
}
