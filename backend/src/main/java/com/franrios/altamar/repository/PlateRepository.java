package com.franrios.altamar.repository;

import com.franrios.altamar.entity.Plate;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PlateRepository extends CrudRepository<Plate, Long> {
    public List<Plate> findAll();
    public Optional<Plate> findByPlateId(Long plateId);
}
