import React from "react";
import "/Users/randallholmes/Durban-Impalas/my-app./src/index.css";
import Image1 from "/Users/randallholmes/Durban-Impalas/my-app./src/Images/Media Content/media_section/images.jpeg";
import Image2 from "/Users/randallholmes/Durban-Impalas/my-app./src/Images/Media Content/media_section/player infront of mic.jpeg";
import Image3 from "/Users/randallholmes/Durban-Impalas/my-app./src/Images/Media Content/media_section/download (1).jpeg";


function Page2() {
    return (
        <section className="page" id="page2">
                <section className="secondpagecontent" id="Media">
                    <div>
                        <h1>Media</h1>
                    </div>
                    <div className="gallery" id="section2">
                        <iframe src="https://www.youtube.com/embed/PT_YZW8NTBY" class="img-1x2" alt="img-1x1"></iframe>
                        <img src={Image1} class="img-1x1"  alt="img-1x1" />
                        <img src={Image2}  class="img-1x1" alt="img-1x1" />
                        <img src={Image3} class="img-1x1" alt="img-1x1" />
                    </div>
                </section>
        </section>
    );
}


export default Page2;