package com.fashionpoint.table;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "AddToCartProducts")
public class AddToCartProducts {
    @Field
    private String title;
    @Field
    private String description;
    @Field
    private String price;

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

    public AddToCartProducts(String title, String price, String description) {
        this.title = title;
        this.price = price;
        this.description = description;
    }

    @Override
    public String toString() {
        return "AddToCartProducts{" +
                "description='" + description + '\'' +
                ", title='" + title + '\'' +
                ", price='" + price + '\'' +
                '}';
    }
}
