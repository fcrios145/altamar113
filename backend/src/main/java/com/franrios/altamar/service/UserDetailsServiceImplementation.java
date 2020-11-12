package com.franrios.altamar.service;


import com.franrios.altamar.entity.Role;
import com.franrios.altamar.entity.User;
import com.franrios.altamar.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserDetailsServiceImplementation implements UserDetailsService {

    @Autowired
    UserRepository userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //Buscar el usuario con el repositorio y si no existe lanzar una exepcion
        User appUser = userRepo.findByUserName(username).orElseThrow(() -> new UsernameNotFoundException("This user doesn't exist"));

        //Mapear nuestra lista de Authority con la de spring security
        List grantList = new ArrayList();
        for (Role role: appUser.getRoles()) {
            // ROLE_USER, ROLE_ADMIN,..
            GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(role.getRole());
            grantList.add(grantedAuthority);
        }


        //Crear El objeto UserDetails que va a ir en sesion y retornarlo.
//        UserDetails user = (UserDetails) new User(appUser.getUserName(), appUser.getPassword(), appUser.getRoles());
        return buildUserForAuthentication(appUser, grantList);

//        return new MyUserPrincipal(appUser);

    }

    private UserDetails buildUserForAuthentication(User user, List<GrantedAuthority> authorities) {
        return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(),
                user.getEnabled(), true, true, true, authorities);
    }
}





