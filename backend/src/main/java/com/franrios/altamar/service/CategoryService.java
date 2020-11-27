package com.franrios.altamar.service;

import com.franrios.altamar.entity.Category;
import com.franrios.altamar.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class CategoryService {
    @Autowired
    CategoryRepository categoryRepository;

    public Optional<Category> findByCategoryId(Long categoryId) {
        return categoryRepository.findByCategoryId(categoryId);
    }
}
