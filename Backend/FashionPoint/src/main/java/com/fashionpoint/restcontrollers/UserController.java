package com.fashionpoint.restcontrollers;

import com.fashionpoint.repository.RegisteredUserRepository;
import com.fashionpoint.table.RegisterUser;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    RegisteredUserRepository registeredUserRepository;

    @PostMapping("/getloginuser")
    public String getUser(@RequestBody RegisterUser registerUser){
       Optional<RegisterUser> loginUser =  registeredUserRepository.findByEmailAndPassword(registerUser.getEmail(),registerUser.getPassword());
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("email",loginUser.get().getEmail());
        jsonObject.put("name",loginUser.get().getName());
        jsonObject.put("password",loginUser.get().getPassword());
        jsonObject.put("confirmpassword",loginUser.get().getConfirmpassword());
        jsonObject.put("mobilenumber",loginUser.get().getMobileNumber());
        jsonObject.put("address",loginUser.get().getAddress());
        jsonObject.put("zipcode",loginUser.get().getZipcode());
        //System.out.println(jsonObject.toString());
       return jsonObject.toString();
    }

    @PostMapping("/registeruser")
    public String registerUser(@RequestBody RegisterUser registerUser ){
        System.out.println(registerUser);
        registerUser.getName();
        registerUser.getEmail();
        registerUser.getPassword();
        registerUser.getConfirmpassword();
        registerUser.getMobileNumber();
        registerUser.getAddress();
        registerUser.getZipcode();
        registeredUserRepository.save(registerUser);
     return "User Has Been successfully saved";
    }
}
