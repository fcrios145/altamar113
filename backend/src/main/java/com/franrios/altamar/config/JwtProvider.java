package com.franrios.altamar.config;

import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtProvider {

//    private static  final Logger logger = LoggerFactory.getLogger(JwtEntryPoint.class);

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private int expiration;

    public String generateToken(Authentication authentication) {
//        new MyUserPrincipal(appUser);
        UserDetails principalUser = (UserDetails) authentication.getPrincipal();
        return Jwts.builder().setSubject(principalUser.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + expiration * 1000))
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    public String getNombreUsuarioFromToken(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
            return true;
        } catch (MalformedJwtException e) {
            System.out.println("token mal formado " + e.getMessage());
        } catch (UnsupportedJwtException e) {
            System.out.println("token no soportado " + e.getMessage());
        } catch (ExpiredJwtException e) {
            System.out.println("token expirado " + e.getMessage());
        } catch (IllegalArgumentException e) {
            System.out.println("token vacío " + e.getMessage());
        } catch (SignatureException e) {
            System.out.println("error en la firma " + e.getMessage());
        }
        return false;
    }
}



