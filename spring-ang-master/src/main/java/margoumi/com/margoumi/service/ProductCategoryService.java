package margoumi.com.margoumi.service;

import margoumi.com.margoumi.models.CategoryProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import margoumi.com.margoumi.repository.CategoryProductRepository;

import java.util.List;

@Service
public class ProductCategoryService {
    private final CategoryProductRepository categoryProductRepository;

    @Autowired
    public ProductCategoryService(CategoryProductRepository categoryProductRepository) {
        this.categoryProductRepository = categoryProductRepository;
    }


    public List<CategoryProduct> findAllCategory( ){
        return categoryProductRepository.findAll();
    }

    public CategoryProduct findProdById(Long id) throws Exception{
        return categoryProductRepository.findCategoryById(id)
                .orElseThrow(() -> new Exception("User by id " + id + " was not found"));
    }

    public CategoryProduct addProduct(CategoryProduct categoryProduct){
        return categoryProductRepository.save(categoryProduct);
    }

    public CategoryProduct editProduct(CategoryProduct categoryProduct){
        return  categoryProductRepository.save(categoryProduct);
    }

    public void deleteProduct(Long id){
        categoryProductRepository.deleteById(id);
    }
}
