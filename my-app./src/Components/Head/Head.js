import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ImpalasLogo from 'Durban-Impalas/Images/';

function Head() {
  return (
    <head>
        <title> Durban Impalas</title>
        <meta charset="UTF-8" />
        <meta name="Description" content="Single Page Application(SPA) for the durban native rugby team. For access for public and clients" />
        <meta name="Keywords" content = "Rugby, Sports, Marketplace" />
        <meta name="Author" content="Randall Holmes" />
        <link rel="stylesheet" type="text/css" href="index.css" />
        <script type="text/javascript" src="index.js"></script>
    </head>
  )
 }

ReactDOM.render(
  <Head />,
  document.getElementById("head")
);