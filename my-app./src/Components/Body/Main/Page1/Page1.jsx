import React from 'react';
import "/Users/randallholmes/Durban-Impalas/my-app./src/index.css";
import Player1 from "/Users/randallholmes/Durban-Impalas/my-app./src/Images/Media Content/front Page-Rugby Player.jpeg";
import Player2 from "/Users/randallholmes/Durban-Impalas/my-app./src/Images/Media Content/front page player 2.jpeg";


function ContactSection1() {
    return (
        <section>
            <h3 style={{color: "black"}}>Contact Us</h3>
            <p>If you would like to get in touch send us a message and we would love to get back to you!</p>
        </section>
    );
  }
  
  function ContactSection2() {
    return (
      <section className='section2'>
        <label htmlFor="message"  name="message">message:</label>
        <textarea></textarea>
        <label htmlFor="submit" name="submit">submit:</label>
        <button htmlFor="submit" class="btn">Send</button>
      </section>
    );
  }
  
  function Policy() {
    return (
      <section>
        <h3 style={{color: "black"}}>Policy</h3>
        <p> Durban Impalas is committed to providing quality services to you and this policy outlines our ongoing obligations to you in respect of how we manage your Personal Information.
            We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the way in which we collect, use, disclose, store, secure and dispose of your Personal Information.
            A copy of the Australian Privacy Principles may be obtained from the website of The Office of the Australian Information Commissioner at www.aoic.gov.au
            </p>
      </section>
    );
  }
  
  function Concact() {
    return (
      <section className="contactinfo" name="About" id="About" method="Post">
        <ContactSection1 />
        <ContactSection2 />
        <Policy />
      </section>
    );
  }
  
function AboutUSS() {
    return (
      <section class="frontpagecontent" name="About" id="About">
        <div id="overview">
            <h1>About Us</h1>
            <p>The Durban Impalas is a local South African Rugby. We are dedicate to our fans and community, established in 1918 we have a love and dedication for the sport that is intrique in our
                dna. Our brand has ethics of dedication, hardwork and empathy in which proceedings of our success goes into the health and wellbeing of the community we are apart of. If you would like to get
                involved please send us a message on the contact section and we would love to know how we can help each other. </p>
        </div>
        <div id="section2">
            <img src={Player2} className="column" width="500" height="500" alt="GalleryImg"  /> 
            <img src={Player1} className="column" width="500" height="500" alt="GalleryImg" /> 
        </div>  
      </section>
    );
  }
  
  function Page1() {
    return (
      <section className="page" id="page1">
        <AboutUSS />
        <Concact />
      </section>
    );
  }
  
  // ReactDOM.render(<Page1 />, document.getElementById("root"))

  export default Page1;