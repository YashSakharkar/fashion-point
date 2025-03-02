package com.fashionpoint.table;

import jakarta.annotation.Generated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Random;

@Document(collection = "AddToCartProducts")
public class AddToCartProducts {
    @Field
    private String productId;
    @Field
    private String title;
    @Field
    private String description;
    @Field
    private String price;
    @Field
    private String image;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getId() {

        return productId;
    }

    public void setId(String productId) {
        this.productId = productId;
    }

    public AddToCartProducts(String title, String price, String description, String image) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
    }

    @Override
    public String toString() {
        return "AddToCartProducts{" +
                "description='" + description + '\'' +
                ", title='" + title + '\'' +
                ", price='" + price + '\'' +
                ", image='" + image + '\'' +
                '}';
    }
}
