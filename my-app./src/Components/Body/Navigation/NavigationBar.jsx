import React from "react";
import "/Users/randallholmes/Durban-Impalas/my-app./src/index.css";
import Logo from "/Users/randallholmes/Durban-Impalas/my-app./src/Images/logos/Durban_Impalas.png"



// Create the top navigation bar of the webpage.

function NavigationBar() {
    return (
      <nav className='barnav'>
            <img src={Logo} width="66" height="66" alt="Logo" />  
            <h3>Durban Impalas</h3>
            <a href="#About">About Us</a>    
            <a href="#Media">Media</a>
            <a href="#Standings/Game Score">Standings/Game Score</a>
            <a href="#Statistics">Statistics</a>
            <a href="#Marketplace">Marketplace</a>
            <a href="#About">Contact Us</a>
        </nav>
  
    );
  }


export default NavigationBar; 