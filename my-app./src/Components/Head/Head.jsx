import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/Users/randallholmes/Durban-Impalas/my-app./src/index.css";
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
        <script type="text/javascript" src="/Users/randallholmes/Durban-Impalas/my-app./src/index.js"></script>
    </head>
  )
 }

const container = document.getElementById("head");

const root = createRoot(container);

root.render(
  <StrictMode>
    <Head />
  </StrictMode>
);
