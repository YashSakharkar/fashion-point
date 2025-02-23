package com.fashionpoint.table;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "RegisteredUsersCollection")
public class RegisterUser {
    @Field
    private String name;
    @Field
    private String email;
    @Field
    private String password;
    @Field
    private String confirmpassword;

    public String getConfirmpassword() {
        return confirmpassword;
    }

    public void setConfirmpassword(String confirmpassword) {
        this.confirmpassword = confirmpassword;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public RegisterUser(String confirmpassword, String email, String name, String password) {
        this.confirmpassword = confirmpassword;
        this.email = email;
        this.name = name;
        this.password = password;
    }

    @Override
    public String toString() {
        return "RegisterUser{" +
                "confirmpassword='" + confirmpassword + '\'' +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
