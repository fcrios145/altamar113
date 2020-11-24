package com.franrios.altamar.repository;

import com.franrios.altamar.entity.Plate;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlateRepository extends CrudRepository<Plate, Long> {
    public List<Plate> findAll();
}
