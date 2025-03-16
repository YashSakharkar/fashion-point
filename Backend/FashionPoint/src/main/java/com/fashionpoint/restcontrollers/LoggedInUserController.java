package com.fashionpoint.restcontrollers;

import com.fashionpoint.repository.LoggedInUserRepository;
import com.fashionpoint.repository.RegisteredUserRepository;
import com.fashionpoint.table.LoggedInUser;
import com.fashionpoint.table.RegisterUser;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoggedInUserController {
    @Autowired
    LoggedInUserRepository loggedInUserRepository;
    @Autowired
    RegisteredUserRepository registeredUserRepository;

    @PostMapping("/logginuser")
    public String getLoggedInUser(@RequestBody LoggedInUser loggedInUser){

            loggedInUser.getEmail();
            loggedInUser.getPassword();
            loggedInUserRepository.save(loggedInUser);
            return "Logged In User Stored";
    }
@GetMapping("/getLoggedInUser")
public Map<String, String> getLoggedInUser() {
    Map<String, String> user = new HashMap<>();
      Optional<LoggedInUser> optionalLoggedInUser = loggedInUserRepository.findById("loggedInUser");
      Optional<RegisterUser> optionalRegisterUser = registeredUserRepository.findByEmailAndPassword(optionalLoggedInUser.get().getEmail(),optionalLoggedInUser.get().getPassword());
    user.put("email",optionalRegisterUser.get().getEmail());
    user.put("name",optionalRegisterUser.get().getName());
    user.put("password",optionalRegisterUser.get().getPassword());
    user.put("confirmpassword",optionalRegisterUser.get().getConfirmpassword());
    user.put("mobilenumber",optionalRegisterUser.get().getMobileNumber());
    user.put("address",optionalRegisterUser.get().getAddress());
    user.put("zipcode",optionalRegisterUser.get().getZipcode());
    return user; // Make sure this returns actual data
}
}

