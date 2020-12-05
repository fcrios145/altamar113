package com.franrios.altamar.repository;

import com.franrios.altamar.entity.Category;
import com.franrios.altamar.entity.Plate;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long> {
    public Optional<Category> findByCategoryId(long categoryId);
    public List<Category> findAll();
}
