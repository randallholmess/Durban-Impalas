import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Body from './Components/Body/Body';
// import Footer from './Components/Footer/Footer'
// import ImpalasLogo from 'Durban-Impalas/Images/';

function App() {
  return (
    <div>
      <Body />
      {/* <Footer /> */}
    </div>
    
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
