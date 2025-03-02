package com.fashionpoint.repository;

import com.fashionpoint.table.AddToCartProducts;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AddToCartProductsRepository extends MongoRepository<AddToCartProducts,String> {
    @Query(value = "{ 'productId' : ?0 }", delete = true)
    void deleteByProductId(String productId);
}
