package margoumi.com.margoumi.controllers;

import margoumi.com.margoumi.models.CategoryProduct;
import org.springframework.web.bind.annotation.*;
import margoumi.com.margoumi.service.ProductCategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@RequestMapping("/category")
// @CrossOrigin("http://localhost:4200")
public class CategoryProductController {

    private static ProductCategoryService productCategoryService;

    public CategoryProductController(ProductCategoryService productCategoryService) {
        this.productCategoryService = productCategoryService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<CategoryProduct>> getAllCategories () {
        List<CategoryProduct> category = productCategoryService.findAllCategory();
        return new ResponseEntity<>(category, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<CategoryProduct> getCategoryById (@PathVariable("id") Long id) throws Exception {
        CategoryProduct category = productCategoryService.findProdById(id);
        return new ResponseEntity<>(category, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<CategoryProduct> addCategory(@RequestBody CategoryProduct category) {
        CategoryProduct newCategory = productCategoryService.addProduct(category);
        return new ResponseEntity<>(newCategory, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<CategoryProduct> updateCategory(@RequestBody CategoryProduct category) {
        CategoryProduct updateCategory = productCategoryService.editProduct(category);
        return new ResponseEntity<>(updateCategory, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable("id") Long id) {
        productCategoryService.deleteProduct(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
