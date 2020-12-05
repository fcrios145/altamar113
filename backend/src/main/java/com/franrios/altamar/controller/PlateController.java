package com.franrios.altamar.controller;

import com.franrios.altamar.dto.PlateDto;
import com.franrios.altamar.dto.PlateDtoGet;
import com.franrios.altamar.entity.Category;
import com.franrios.altamar.entity.Plate;
import com.franrios.altamar.service.CategoryService;
import com.franrios.altamar.service.FileStorageService;
import com.franrios.altamar.service.MapValidationErrorService;
import com.franrios.altamar.service.PlateService;
import org.apache.coyote.Response;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.net.ssl.HttpsURLConnection;
import javax.print.attribute.standard.Media;
import javax.validation.Valid;
import javax.validation.constraints.*;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/plates")
public class PlateController {

    @Autowired
    PlateService plateService;

    @Autowired
    CategoryService categoryService;

    @Autowired
    MapValidationErrorService mapValidationErrorService;

    @Autowired
    private FileStorageService fileStorageService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping("/")
    public ResponseEntity<?> GetAllPlates() {
        List<Plate> plates = plateService.GetAll();
        List<PlateDtoGet> plateDtoGets = plates.stream().map(this::convertToDto).collect(Collectors.toList());
        return new ResponseEntity<>(plateDtoGets, HttpStatus.OK);
    }

    private PlateDtoGet convertToDto(Plate plate) {
        PlateDtoGet plateDtoGet = modelMapper.map(plate, PlateDtoGet.class);
        return plateDtoGet;
    }

    @GetMapping("/{plateId}")
    public ResponseEntity<?> GetPlate(
            @PathVariable("plateId") @NotBlank @Positive Long plateId) {

        Optional<Plate> plate = plateService.GetByPlateId(plateId);

        if(!plate.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

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

    @PostMapping(value = "/", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> SavePlateWithImage(@Valid @ModelAttribute PlateDto plateDto, BindingResult bindingResult) {
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(bindingResult);
        if(errorMap != null){
            return errorMap;
        }

        String fileName = fileStorageService.storeFile(plateDto.getImage());
        //save image
        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(fileName)
                .toUriString();

        //save plate
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
        plate.setImagePath(fileName);
        plateService.Save(plate);
        return new ResponseEntity<>(plate, HttpStatus.OK);
    }

    @PutMapping("/{plateId}")
    public ResponseEntity<?> UpdatePlate(
            @PathVariable("plateId") Long plateId,
            @Valid @RequestBody final PlateDto plateDto, BindingResult bindingResult){
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(bindingResult);
        if(errorMap != null){
            return errorMap;
        }
        //Get plate
        Optional<Plate> plate = plateService.GetByPlateId(plateId);
        if(!plate.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        //Get Category
        Optional<Category> category = categoryService.findByCategoryId(plateDto.getCategoryIdFk());
        if(!category.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        Plate plateInstance = plate.get();
        plateInstance.setName(plateDto.getName());
        plateInstance.setDescription(plateDto.getDescription());
        plateInstance.setCategory(category.get());
        return new ResponseEntity<>(plateService.Update(plateInstance), HttpStatus.OK);
    }

    @DeleteMapping("/{plateId}")
    public ResponseEntity<?> DeletePlate(
            @PathVariable("plateId") Long plateId){
        //Get plate
        Optional<Plate> plate = plateService.GetByPlateId(plateId);
        if(!plate.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        try {
            plateService.Delete(plateId);
        } catch (Exception ex){
            //TODO log error
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
