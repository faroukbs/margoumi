package margoumi.com.margoumi.repository;


import margoumi.com.margoumi.models.CategoryProduct;
import margoumi.com.margoumi.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {
    Optional<Product> findProductById(Long id);

    public List<Product> findByCategory(CategoryProduct category);

}
