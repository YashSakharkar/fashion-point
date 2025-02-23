package com.fashionpoint.repository;

import com.fashionpoint.table.RegisterUser;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RegisteredUserRepository extends MongoRepository<RegisterUser,String> {
    Optional<RegisterUser> findByEmailAndPassword(String email, String password);
}
