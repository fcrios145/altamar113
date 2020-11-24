package com.franrios.altamar.service;

import com.franrios.altamar.entity.Plate;
import com.franrios.altamar.repository.PlateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PlateService {

    @Autowired
    PlateRepository plateRepository;

    public List<Plate> GetAll() {
        return plateRepository.findAll();
    }
}
