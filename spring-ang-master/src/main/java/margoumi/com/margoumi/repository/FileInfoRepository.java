package margoumi.com.margoumi.repository;

import margoumi.com.margoumi.models.FileInfo;
import margoumi.com.margoumi.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;

public interface FileInfoRepository extends JpaRepository<FileInfo, Long> {

    ArrayList<FileInfo> findByImage(Product product);
}
