package com.franrios.altamar.service;

import com.franrios.altamar.dto.PlateDto;
import com.franrios.altamar.entity.Plate;
import com.franrios.altamar.repository.PlateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PlateService {

    @Autowired
    PlateRepository plateRepository;

    public List<Plate> GetAll() {
        return plateRepository.findAll();
    }

    public Optional<Plate> GetByPlateId(Long plateId) { return plateRepository.findByPlateId(plateId); }

    public Plate Save(Plate plate) { return plateRepository.save(plate); }

    public Plate Update(Plate plate) {return plateRepository.save(plate);}

    public void Delete(Long plateId) {plateRepository.deleteById(plateId);}
}
