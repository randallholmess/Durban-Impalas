import React from "react";
import "src/index.css";
import ReactDOM from 'react-dom';
import Page1 from "./Components/Body/Main/Page1";
import Page2 from "./Components/Body/Main/Page2";
import Page3 from "./Components/Body/Main/Page3";
import Page4 from "./Components/Body/Main/Page4";
import Page5 from "./Components/Body/Main/Page5";

function Body() 
{
    return(
            <div>
                <Page1 />
                <Page2 />
                <Page3 />
                <Page4 />
                <Page5 />
            </div>
        );
}
 
ReactDOM.render(
    <Body />,
    document.getElementById("root")
);