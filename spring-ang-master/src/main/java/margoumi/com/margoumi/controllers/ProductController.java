package margoumi.com.margoumi.controllers;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import margoumi.com.margoumi.models.CategoryProduct;
import margoumi.com.margoumi.models.FileInfo;
import margoumi.com.margoumi.models.Product;
import margoumi.com.margoumi.repository.FileInfoRepository;
import margoumi.com.margoumi.service.ProductCategoryService;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import margoumi.com.margoumi.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

@RestController
@RequestMapping("/product")
//
public class ProductController {

    @Autowired
    private final ProductService productService;

    @Autowired
    private final ProductCategoryService productCategoryService;


    @Autowired
    FileInfoRepository imageRepository;

    @Autowired
    ServletContext context;

    public ProductController(ProductService productService,ProductCategoryService productCategoryService) {
        this.productService = productService;
        this.productCategoryService=productCategoryService;
    }

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.findAllProduct();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }


    @PostMapping("/addproduct")
    public long newProduct(@RequestParam("files") MultipartFile[] files,
                           @RequestParam("product") String product) throws JsonParseException, JsonMappingException, Exception {
        Product arti = new ObjectMapper().readValue(product, Product.class);
        boolean isExit = new File(context.getRealPath("/Imagess/")).exists();
        if (!isExit) {
            new File(context.getRealPath("/Imagess/")).mkdir();
            System.out.println("mk dir Imagess.............");
        }
        System.out.println("Save Article  22222.............");
        Set<FileInfo> photos = new HashSet<>();
        for (MultipartFile file : files) {
            FileInfo fileinfo = new FileInfo();
            String filename = file.getOriginalFilename();
            String newFileName = FilenameUtils.getBaseName(filename) + "." + FilenameUtils.getExtension(filename);
            File serverFile = new File(context.getRealPath("/Imagess/" + File.separator + newFileName));
            try {
                System.out.println("Image");
                FileUtils.writeByteArrayToFile(serverFile, file.getBytes());

            } catch (Exception e) {
                e.printStackTrace();
            }
            fileinfo.setName(newFileName);
            fileinfo.setImage(arti);
            imageRepository.save(fileinfo);
            photos.add(fileinfo);
        }

        System.out.println("Save Article 333333.............");
        // arti.setProducts(photos);
        return productService.addProduct(arti);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable("id") Long id) {
        productService.deleteProduct(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product) {
        Product updateProduct = productService.editProduct(product);
        return new ResponseEntity<>(updateProduct, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") Long id) throws Exception {
        Product product = productService.findProdById(id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping("/images/{id}")
    public ResponseEntity<List<FileInfo>> getImagesByProduct(@PathVariable("id") Long id) throws Exception {
        ArrayList<FileInfo> files = new ArrayList<FileInfo>();
        Product product = productService.findProdById(id);
        files = imageRepository.findByImage(product);
        return new ResponseEntity<>(files, HttpStatus.OK);
    }

    @GetMapping(path = "/getimage/{id}")
    public byte[] getPhotoProduct(@PathVariable("id") Long id) throws Exception {
        FileInfo Article = imageRepository.findById(id).orElseThrow(() -> new Exception("File by id " + id + " was not found"));

        return Files.readAllBytes(Paths.get(context.getRealPath("/Imagess/") + Article.getName()));
    }



    @GetMapping( "/catproducts/{id}")
    public ResponseEntity<List<Product>> getAllProductByCategory(@PathVariable("id") Long id)throws Exception{
       CategoryProduct category = productCategoryService.findProdById(id);
        List<Product> products = productService.getAllProductByCategory(category);

        return new ResponseEntity<>(products,HttpStatus.OK);
    }
}
