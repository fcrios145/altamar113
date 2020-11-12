package com.franrios.altamar.repository;


import com.franrios.altamar.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    public Optional<User> findByUserName(String Username);
    boolean existsByUserName(String UserName);
}

