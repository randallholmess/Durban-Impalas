import React from "react";
import "/Users/randallholmes/Durban-Impalas/my-app./src/index.css";
import Main from "./Main/Main";
import NavigationBar from "./Navigation/NavigationBar";
import Footer from "../Footer/Footer";


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
 
// ReactDOM.render(
//     <Body />,
//     document.getElementById("root")
// );

/* <Main /> */

export default Body;