package com.franrios.altamar.entity;

import javax.persistence.*;

@Entity
@Table
public class Plate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long plateId;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private Boolean active;

    @OneToOne(optional = false, fetch = FetchType.EAGER)
    @JoinColumn(name = "category_id_fk")
    private Category category;

    public Plate() {

    }

    public Plate(Long plateId, String name, String description, Boolean active, Category category) {
        this.plateId = plateId;
        this.name = name;
        this.description = description;
        this.active = active;
        this.category = category;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Long getPlateId() {
        return plateId;
    }

    public void setPlateId(Long plateId) {
        this.plateId = plateId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
