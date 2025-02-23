package com.fashionpoint.restcontrollers;

import com.fashionpoint.repository.AddToCartProductsRepository;
import com.fashionpoint.table.AddToCartProducts;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AddToCartRestController {
@Autowired
private AddToCartProductsRepository addToCartProductsRepository;

    @PostMapping("/getaddtocartproducts")
    public String getAddToCartProducts(@RequestBody AddToCartProducts addToCartProducts){
        this.addToCartProductsRepository.save(addToCartProducts);
        System.out.println("user added succesfully");
        return "products";
    }

    @GetMapping("/getallproducts")
    public String getAllProducts(){
        List<AddToCartProducts> products = this.addToCartProductsRepository.findAll();
        System.out.print(products);
        JSONArray jsonArray = new JSONArray();
        for (AddToCartProducts product :products){
            JSONObject object = new JSONObject();
          object.put("title",product.getTitle());
            object.put("description",product.getDescription());
            object.put("price",product.getPrice());
            jsonArray.put(object);
        }

        return  jsonArray.toString();
    }
}
