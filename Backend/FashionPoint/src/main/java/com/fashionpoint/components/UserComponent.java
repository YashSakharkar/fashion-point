package com.fashionpoint.components;

import com.fashionpoint.repository.UserRepository;
import com.fashionpoint.table.User;
import org.springframework.stereotype.Component;

@Component
public class UserComponent {
    private UserRepository userRepository;
    public UserComponent(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

   public    void init(){
       if( !(userRepository.findAll().isEmpty())){
           userRepository.save(new User("Yash","Sakharkar"));
           userRepository.save(new User("Sahil","Parbat"));
           userRepository.save(new User("ram","shyam"));
           userRepository.save(new User("perna","sakharkar"));
           userRepository.save(new User("nmfd,efnekfn","mdlwdlwjdwd"));
       }
       else{
           userRepository.save(new User("Yash","Sakharkar"));
       }
       for(User user :userRepository.findAll()){
           System.out.println("User Found" + user);
       }
   }


}
