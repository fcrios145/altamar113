package com.franrios.altamar.controller;

import com.franrios.altamar.entity.Plate;
import com.franrios.altamar.service.PlateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
}
