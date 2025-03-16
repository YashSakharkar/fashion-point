package com.fashionpoint.repository;

import com.fashionpoint.table.LoggedInUser;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoggedInUserRepository extends MongoRepository<LoggedInUser,String> {
}
