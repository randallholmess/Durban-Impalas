import React from "react";
import "src/index.css";
import ReactDOM from 'react-dom';

<section class="page", id="page5", style="background-color: black">
    <h1 id="Marketplace", style="color: #E5DFB7; width: 100%;">Marketplace</h1>
    <section class="fifthpagecontent">
        <section class ="product">
            <section class="contentcard", id ="item1">
                <h3 style="background-color:white  ;color:black;",class="Cardtitle">Hoodie</h3>
                <img src="Photos/Media Content/Shop/hoodie.webp", width="100%", height="100%", alt="icon for row">
                <section class="orderplacing",style="color: black;background-color: white;"> 
                    <label for="cars">SIZE:</label>
                    <select name="S" id="Size">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    </select>
                </section>
                <label for="add to cart", name="add to cart">add to cart:</label>
                <button onclick= "addtocart(item1)" ,style="background-color: white;">Send</button>
            </section>
            <section class="contentcard", id ="item2">
                <h3 style="background-color:white  ;color:black;",class="Cardtitle">BlackT-Shirt</h3>
                <img src="Photos/Media Content/Shop/Tshirt.webp", width="100%", height="100%", alt="icon for row">
                <section class="orderplacing",style="color: black;background-color: white;"> 
                    <label for="cars">SIZE:</label>
                    <select name="S" id="Size">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </section>
                <label for="add to cart", name="add to cart">add to cart:</label>
                <button onclick= "addtocart(item2)" ,type="submit" class="btn" ,style="background-color: white;">Send</button>
            </section>
            <section class="contentcard", id ="item3">
                <h3 class = "carttitle",style="background-color:white  ;color:black;",class="Cardtitle">Pink T-Shirt</h3>
                <img src="Photos/Media Content/Shop/tshirt 2.webp", width="100%", height="100%", alt="icon for row">
                <section class="orderplacing",style="color: black;background-color: white;"> 
                    <label for="cars">SIZE:</label>
                    <select name="S" id="Size">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    </select>
                </section>
                <label for="add to cart", name="add to cart">add to cart:</label>
                <button onclick="addtocart(item3)" ,type="submit" class="btn" ,style="background-color: white;">Send</button>
            </section>
        </section>
        <h2 style="text-align: center;background-color: white;">Cart</h2>
        <div class="cart", id="cart">
            <div id="Cardtitle"></div>
        </div>
    </section>
</section>