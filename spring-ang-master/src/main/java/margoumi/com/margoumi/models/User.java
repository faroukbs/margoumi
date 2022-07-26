package margoumi.com.margoumi.models;

import lombok.Data;
import org.springframework.context.annotation.Lazy;

import javax.persistence.*;

@Entity
@Table(name = "user")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id ;

    @Column(name = "first_name")
    private String fname;

    @Column(name = "last_name")
    private String lname ;

    @Column(name = "email")
    private String email ;

    @Column(name = "password")
    private String password ;

    @Column(name = "phone")
    private String phone;

    @Column(name = "adress")
    private String adress ;

    @Enumerated(EnumType.STRING)
    @Lazy
    @Column(name = "role")
    private Role role;

    @Transient
    private String token;
}
