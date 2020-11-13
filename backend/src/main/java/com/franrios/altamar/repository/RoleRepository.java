package com.franrios.altamar.repository;

import com.franrios.altamar.entity.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {
    public Optional<Role> findByRole(String Role);
}

