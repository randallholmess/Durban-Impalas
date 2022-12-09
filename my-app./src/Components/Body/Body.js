import React from "react";
import "/Users/randallholmes/Durban-Impalas/my-app./src/index.css";
import ReactDOM from 'react-dom';
import Main from "./Main/Main";
import NavigationBar from "./Navigation/NavigationBar";


function Body() 
{
    return(
            <div>
                <NavigationBar />
                <Main />
            </div>
        );
}
 
// ReactDOM.render(
//     <Body />,
//     document.getElementById("root")
// );

export default Body;