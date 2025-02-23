package com.fashionpoint.repository;

import com.fashionpoint.table.AddToCartProducts;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddToCartProductsRepository extends MongoRepository<AddToCartProducts,String> {
}
