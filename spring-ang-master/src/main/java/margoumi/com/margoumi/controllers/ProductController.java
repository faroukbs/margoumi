package margoumi.com.margoumi.controllers;

import margoumi.com.margoumi.models.Product;
import org.springframework.web.bind.annotation.*;
import margoumi.com.margoumi.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@RequestMapping("/product")
//
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts () {
        List<Product> products = productService.findAllProduct();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }



    @PostMapping("/addproduct")
    public Product newProduct (@RequestBody Product product){
        return productService.addProduct(product);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id) {
        productService.deleteProduct(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Product> updateEmployee(@RequestBody Product product) {
        Product updateProduct = productService.editProduct(product);
        return new ResponseEntity<>(updateProduct, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Product> getEmployeeById (@PathVariable("id") Long id) throws Exception {
        Product product = productService.findProdById(id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

}
