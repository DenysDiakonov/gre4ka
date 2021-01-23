package grechka.proj.kvinz.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;


@Data
@Entity
@Table(name="product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String weight;

    private String image;

    private String link;

    private String shop;

    private Double price;

    @Column(name = "price_for_kilo")
    private Double priceForKilo;

    @Column(name = "date_created")
    private Date dateCreated;
}