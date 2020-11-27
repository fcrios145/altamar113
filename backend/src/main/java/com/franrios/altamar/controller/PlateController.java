package com.franrios.altamar.controller;

import com.franrios.altamar.dto.PlateDto;
import com.franrios.altamar.entity.Category;
import com.franrios.altamar.entity.Plate;
import com.franrios.altamar.service.CategoryService;
import com.franrios.altamar.service.MapValidationErrorService;
import com.franrios.altamar.service.PlateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/plates")
public class PlateController {

    @Autowired
    PlateService plateService;

    @Autowired
    CategoryService categoryService;

    @Autowired
    MapValidationErrorService mapValidationErrorService;

    @GetMapping("/")
    public ResponseEntity<?> GetAllPlates() {
        List<Plate> plates = plateService.GetAll();
        return new ResponseEntity<List<Plate>>(plates, HttpStatus.OK);
    }

    @GetMapping("/{plateId}")
    public ResponseEntity<?> GetPlate(@PathVariable("plateId") Long plateId) {
        Optional<Plate> plate = plateService.GetByPlateId(plateId);
        return new ResponseEntity(plate, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<?> SavePlate(@Valid @RequestBody final PlateDto plateDto, BindingResult bindingResult) {
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(bindingResult);
        if(errorMap != null){
            return errorMap;
        }
        Optional<Category> category = categoryService.findByCategoryId(plateDto.getCategoryIdFk());
        Plate plate = new Plate();
        if(!category.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        //TODO add mapper dependency to remove the dto->Entity logic
        plate.setCategory(category.get());
        plate.setActive(true);
        plate.setName(plateDto.getName());
        plate.setDescription(plateDto.getDescription());
        plateService.Save(plate);
        return new ResponseEntity<>(plate, HttpStatus.OK);
    }

}
