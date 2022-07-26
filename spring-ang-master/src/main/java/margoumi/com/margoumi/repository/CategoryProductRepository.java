package margoumi.com.margoumi.repository;

import margoumi.com.margoumi.models.CategoryProduct;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

@org.springframework.stereotype.Repository
public interface CategoryProductRepository extends JpaRepository<CategoryProduct,Long> {
    Optional<CategoryProduct> findCategoryById(Long id);
}
