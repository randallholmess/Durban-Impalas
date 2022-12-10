import React from "react";
import "/Users/randallholmes/Durban-Impalas/my-app./src/index.css";
import ReactDOM from 'react-dom/client';



function NavigationBar() {
    return (
      <nav className='barnav'>
            {/* <img src="Photos/logos/Durban_Impalas.png", width="66", height="66", alt="Logo"> */}
            <h3>Durban Impalas</h3>
            <a href="#About">About Us</a>    
            <a href="#Media">Media</a>
            <a href="#Standings/Game Score">Standings/Game Score</a>
            <a href="#Statistics">Statistics</a>
            <a href="#Marketplace">Marketplace</a>
            <a href="#About">Contact Us</a>
        </nav>
  
    )
  }

//   ReactDOM.render(
//     <NavigationBar />,
//     document.getElementById("root")
// );

export default NavigationBar;