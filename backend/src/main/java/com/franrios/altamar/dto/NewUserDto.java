package com.franrios.altamar.dto;

import javax.validation.constraints.NotBlank;
import java.util.Set;

public class NewUserDto {

    @NotBlank
    private String userName;

    private String password;

    private String pakito;

    private Set<String> roles;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPakito() {
        return pakito;
    }

    public void setPakito(String pakito) {
        this.pakito = pakito;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((userName == null) ? 0 :userName.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        NewUserDto other = (NewUserDto) obj;
        if (userName == null) {
            if (other.userName != null)
                return false;
        } else if (!userName.equals(other.userName))
            return false;
        return true;
    }

    public NewUserDto(String userName, String password, String pakito, Set<String> roles) {
        this.userName = userName;
        this.password = password;
        this.pakito = pakito;
        this.roles = roles;
    }

    public NewUserDto(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    public NewUserDto() {
    }
}

