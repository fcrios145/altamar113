package com.franrios.altamar.controller;

import com.franrios.altamar.config.JwtProvider;
import com.franrios.altamar.dto.JwtDto;
import com.franrios.altamar.dto.MessageDto;
import com.franrios.altamar.dto.NewUserDto;
import com.franrios.altamar.dto.UserLoginDto;
import com.franrios.altamar.entity.Role;
import com.franrios.altamar.entity.User;
import com.franrios.altamar.service.RoleService;
import com.franrios.altamar.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserService userService;

    @Autowired
    RoleService rolService;

    @Autowired
    JwtProvider jwtProvider;

    @PostMapping("/newUser")
    public ResponseEntity<?> newUser(@RequestBody NewUserDto newUser){
        System.out.println("---------------------");
        if(userService.existByUserName(newUser.getUserName()))
            return new ResponseEntity(new MessageDto("A user with this username already exists"), HttpStatus.BAD_REQUEST);
        User userApp =
                new User(newUser.getUserName(), passwordEncoder.encode(newUser.getPassword()));
        Set<String> rolesStr = newUser.getRoles();
        Set<Role> roles = new HashSet<>();
        for (String rol : rolesStr) {
            switch (rol) {
                case "ROLE_ADMIN":
                    Role rolAdmin = rolService.getByRole("ROLE_ADMIN").get();
                    roles.add(rolAdmin);
                    break;
                default:
                    Role roleUser = rolService.getByRole("ROLE_USER").get();
                    roles.add(roleUser);
            }
        }
        userApp.setEnabled(true);
        userApp.setRoles(roles);
        userService.save(userApp);
        return new ResponseEntity(new MessageDto("usuario guardado"), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<JwtDto> login(@Valid @RequestBody UserLoginDto loginUsuario, BindingResult bindingResult){
        System.out.println(loginUsuario.getUserName());
        System.out.println(loginUsuario.getPassword());
        if(bindingResult.hasErrors())
            return new ResponseEntity(new MessageDto("campos vacíos o email inválido"), HttpStatus.BAD_REQUEST);
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginUsuario.getUserName(), loginUsuario.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateToken(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        JwtDto jwtDTO = new JwtDto(jwt, userDetails.getUsername(), userDetails.getAuthorities());
        return new ResponseEntity<JwtDto>(jwtDTO, HttpStatus.OK);
    }

    @GetMapping("/logged")
    public boolean logged() {
        return true;
    }
}

