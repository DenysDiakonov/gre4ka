package grechka.proj.kvinz.repository;

import grechka.proj.kvinz.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Product,Long> {
    List<Product> findByTitle(String title);
}
