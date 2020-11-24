package com.franrios.altamar.controller;

import com.franrios.altamar.entity.Plate;
import com.franrios.altamar.service.PlateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/plates")
public class PlateController {

    @Autowired
    PlateService plateService;

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

}
