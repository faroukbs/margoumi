package margoumi.com.margoumi.service;

import margoumi.com.margoumi.models.CategoryProduct;
import margoumi.com.margoumi.models.Product;
import margoumi.com.margoumi.repository.CategoryProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import margoumi.com.margoumi.repository.ProductRepository;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private final ProductRepository productRepository;

    @Autowired
    CategoryProductRepository categoryProductRepository;


    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }



    public List<Product> findAllProduct() {
        return productRepository.findAll();
    }

    public Product findProdById(Long id) throws Exception {
        return productRepository.findProductById(id)
                .orElseThrow(() -> new Exception("User by id " + id + " was not found"));
    }

    public long addProduct(Product product){
        return productRepository.save(product).getId();
    }

    public Product editProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
//
//    public List<Product>getProductsByCategory(String product_id){
//        return productRepository.getByCategoryId(product_id);
//    }
    public List<Product> getAllProductByCategory(CategoryProduct category) {
        return productRepository.findByCategory(category);
    }
}
