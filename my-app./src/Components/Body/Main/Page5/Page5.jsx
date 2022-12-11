import React from "react";
import "/Users/randallholmes/Durban-Impalas/my-app./src/index.css";
import addtocart from "/Users/randallholmes/Durban-Impalas/my-app./src/addtocart.js"
import Hoodie1 from "/Users/randallholmes/Durban-Impalas/my-app./src/Images/Media Content/Shop/hoodie.webp";
import BlackT from "/Users/randallholmes/Durban-Impalas/my-app./src/Images/Media Content/Shop/Tshirt.webp";
import PinkT from "/Users/randallholmes/Durban-Impalas/my-app./src/Images/Media Content/Shop/tshirt 2.webp";


function Item1() {
    return (
        <section className="contentcard" id ="item1">
            <h3 style={{backgroundColor:"white",color:"black"}} className="Cardtitle">Hoodie</h3>
            <img src={Hoodie1} width="100%" height="100%" alt="icon for row" />
            <section className="orderplacing" style={{color: "black" , backgroundColor: "white"}}> 
                <label htmlFor="cars">SIZE:</label>
                <select name="S" id="Size">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                </select>
            </section>
            <label htmlFor="add to cart" name="add to cart">add to cart:</label>
             <button type="submit" onClick= {() => this.addtocart("item1")} style={{backgroundColor: "white"}}>Send</button>
        </section>
    );
}

function Item2() {
    return (
        <section className="contentcard" id ="item2">
            <h3 style={{backgroundColor:"white",color:"black"}} className="Cardtitle">BlackT-Shirt</h3>
            <img src={BlackT} width="100%" height="100%" alt="icon for row" />
            <section className="orderplacing" style={{backgroundColor:"white",color:"black"}}> 
                <label htmlFor="cars">SIZE:</label>
                <select name="S" id="Size">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </section>
            <label htmlFor="add to cart" name="add to cart">add to cart:</label>
            <button type="submit" className="btn" onClick= {() => this.addtocart("item2")} style={{backgroundColor: "white"}}>Send</button>
        </section>
    );
}

function Item3() {
    return (
        <section className="contentcard" id ="item3">
            <h3 style={{backgroundColor:"white",color:"black"}}className="Cardtitle">Pink T-Shirt</h3>
            <img src={PinkT} width="100%" height="100%" alt="icon for row" />
            <section className="orderplacing" style={{color: "black", backgroundColor: "white"}}> 
                <label htmlFor="cars">SIZE:</label>
                <select name="S" id="Size">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                </select>
            </section>
            <label htmlFor="add to cart" name="add to cart">add to cart:</label>
            <button onclick={() => addtocart("item3")} type="submit" className="btn" style={{backgroundColor: "white"}}>Send</button>
        </section>
    );
}

function Page5() {
    return (
    <section className="page" id="page5" style={{backgroundColor: "black"}}>
        <h1 id="Marketplace" style={{color: "#E5DFB7" , width: "100%"}}>Marketplace</h1>
        <section className="fifthpagecontent">
            <section className ="product">
                <Item1 />
                <Item2 />
                <Item3 />
            </section>
            <h2 style={{textAlign: "center" , backgroundColor: "white"}}>Cart</h2>
            <div className="cart" id="cart">
                <div id="Cardtitle"></div>
            </div>
        </section>
    </section>
    );
}

export default Page5;