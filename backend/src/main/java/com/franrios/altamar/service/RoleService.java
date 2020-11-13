package com.franrios.altamar.service;

import com.franrios.altamar.entity.Role;
import com.franrios.altamar.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class RoleService {

    @Autowired
    RoleRepository roleRepository;

    public Optional<Role> getByRole(String role){
        return roleRepository.findByRole(role);
    }
}

