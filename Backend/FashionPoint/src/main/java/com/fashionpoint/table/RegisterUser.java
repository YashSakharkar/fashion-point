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
    @Field
    private String mobileNumber;
    @Field
    private String address;
    @Field
    private String zipcode;

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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }



    public RegisterUser(String address, String confirmpassword, String email, String name, String mobileNumber, String password, String zipcode) {
        this.address = address;
        this.confirmpassword = confirmpassword;
        this.email = email;
        this.name = name;
        this.mobileNumber = mobileNumber;
        this.password = password;
        this.zipcode = zipcode;
    }

    @Override
    public String toString() {
        return "RegisterUser{" +
                "address='" + address + '\'' +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", confirmpassword='" + confirmpassword + '\'' +
                ", mobileNumber='" + mobileNumber + '\'' +
                ", zipcode='" + zipcode + '\'' +
                '}';
    }
}
