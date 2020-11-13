package com.franrios.altamar.service;

import com.franrios.altamar.entity.User;
import com.franrios.altamar.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class UserService {

    @Autowired
    UserRepository userRepository;

    public Optional<User> getByUserName(String userName){
        return userRepository.findByUserName(userName);
    }

    public boolean existByUserName(String userName){
        return userRepository.existsByUserName(userName);
    }
//
//    public  boolean existePorEmail(String email){
//        return userRepository.existsByEmail(email);
//    }

    public void save(User user){
        userRepository.save(user);
    }
}

