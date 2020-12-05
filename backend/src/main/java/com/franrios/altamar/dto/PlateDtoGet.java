package com.franrios.altamar.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PlateDtoGet {

    private String description;
    private String name;
    @JsonProperty("categoryId")
    private Long categoryCategoryId;
    private String imagePath;
    private Long plateId;

    public PlateDtoGet() {
    }


    public PlateDtoGet(String description, String name, Long categoryCategoryId, String imagePath, Long plateId) {
        this.description = description;
        this.name = name;
        this.categoryCategoryId = categoryCategoryId;
        this.imagePath = imagePath;
        this.plateId = plateId;
    }

    public Long getPlateId() {
        return plateId;
    }

    public void setPlateId(Long plateId) {
        this.plateId = plateId;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getCategoryCategoryId() {
        return categoryCategoryId;
    }

    public void setCategoryCategoryId(Long categoryCategoryId) {
        this.categoryCategoryId = categoryCategoryId;
    }
}
