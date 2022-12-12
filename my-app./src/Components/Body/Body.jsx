import React from "react";
import "/Users/randallholmes/Durban-Impalas/my-app./src/index.css";
import Main from "./Main/Main";
import NavigationBar from "./Navigation/NavigationBar";
import Footer from "../Footer/Footer";


//Main Function that creates the content of all Components in the website.

function Body() 
{
    return(
            <div>
                <NavigationBar />
                <Main />
                <Footer />
            </div>
        );
}
 

export default Body;