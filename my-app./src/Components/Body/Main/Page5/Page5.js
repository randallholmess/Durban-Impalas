import React from "react";
import "/Users/randallholmes/Durban-Impalas/my-app./src/index.css";
import ReactDOM from 'react-dom';
import addtocart from "/Users/randallholmes/Durban-Impalas/my-app./src/addtocart.js"


function Item1() {
    return (
        <section className="contentcard" id ="item1">
            <h3 style="background-color:white  ;color:black;" className="Cardtitle">Hoodie</h3>
            <img src="Photos/Media Content/Shop/hoodie.webp" width="100%" height="100%" alt="icon for row" />
            <section className="orderplacing" style="color: black;background-color: white;"> 
                <label htmlFor="cars">SIZE:</label>
                <select name="S" id="Size">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                </select>
            </section>
            <label htmlFor="add to cart" name="add to cart">add to cart:</label>
             <button onclick= {addtocart} id="item1" style="background-color: white;">Send</button>
        </section>
    )
}

function Item2() {
    return (
        <section className="contentcard" id ="item2">
            <h3 style="background-color:white  ;color:black;" className="Cardtitle">BlackT-Shirt</h3>
            <img src="Photos/Media Content/Shop/Tshirt.webp" width="100%" height="100%" alt="icon for row" />
            <section className="orderplacing" style="color: black;background-color: white;"> 
                <label htmlFor="cars">SIZE:</label>
                <select name="S" id="Size">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </section>
            <label htmlFor="add to cart" name="add to cart">add to cart:</label>
            <button onclick= {addtocart} id="item2" type="submit" className="btn" style="background-color: white;">Send</button>
        </section>
    )
}

function Item3() {
    return (
        <section className="contentcard" id ="item3">
            <h3 style="background-color:white  ;color:black;" className="Cardtitle">Pink T-Shirt</h3>
            <img src="Photos/Media Content/Shop/tshirt 2.webp" width="100%" height="100%" alt="icon for row" />
            <section class="orderplacing" style="color: black;background-color: white;"> 
                <label htmlFor="cars">SIZE:</label>
                <select name="S" id="Size">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                </select>
            </section>
            <label htmlFor="add to cart" name="add to cart">add to cart:</label>
            <button onclick={addtocart} id="item3" type="submit" className="btn" style="background-color: white;">Send</button>
        </section>
    )
}


function Page5() {
    return (
    <section className="page" id="page5" style="background-color: black">
        <h1 id="Marketplace" style="color: #E5DFB7; width: 100%;">Marketplace</h1>
        <section class="fifthpagecontent">
            <section class ="product">
                <Item1 />
                <Item2 />
                <Item3 />
            </section>
            <h2 style="text-align: center;background-color: white;">Cart</h2>
            <div className="cart" id="cart">
                <div id="Cardtitle"></div>
            </div>
        </section>
    </section>
    )
}

// ReactDOM.render(<Page5 />,document.getElementById("root"))

export default Page5;