package margoumi.com.margoumi.repository;

import margoumi.com.margoumi.models.Role;
import margoumi.com.margoumi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
 Optional<User> findByEmail(String email);

 @Modifying
 @Query("update User set role = :role where email = :email")
 void updateUserRole(@Param("email") String email, @Param("role") Role role );
}
