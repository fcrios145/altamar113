package com.franrios.altamar.dto;

public class MessageDto {
    private String message;

    public MessageDto(String mensaje) {
        this.message = mensaje;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}

