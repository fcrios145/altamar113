package com.franrios.altamar.dto;

import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class PlateDto {
    @NotEmpty
    private String description;

    @NotEmpty
    private String name;

    @NotNull
    private Long categoryIdFk;

    @NotNull
    MultipartFile image;

    public PlateDto() {
    }

    public MultipartFile getImage() {
        return image;
    }

    public void setImage(MultipartFile image) {
        this.image = image;
    }

    public PlateDto(String description, String name, Long categoryIdFk) {
        this.description = description;
        this.name = name;
        this.categoryIdFk = categoryIdFk;
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

    public Long getCategoryIdFk() {
        return categoryIdFk;
    }

    public void setCategoryIdFk(Long categoryIdFk) {
        this.categoryIdFk = categoryIdFk;
    }
}
