package margoumi.com.margoumi.models;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.Set;


@Entity
@Table(name = "product")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;



    @Column(name = "normal_price")
    private BigDecimal nprix;

    @Column(name = "gros_price")
    private BigDecimal gprix;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "create_date")
    @CreationTimestamp
    private Date createdDate;

    @Column(name = "updated_date")
    @UpdateTimestamp
    private Date updatedDate;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "category_id")
    private CategoryProduct category ;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "image")
    private Set<FileInfo> products;


}
