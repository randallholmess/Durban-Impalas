import React from "react";
import "/Users/randallholmes/Durban-Impalas/my-app./src/index.css";
import ReactDOM from 'react-dom';


function Page2() {
    return (
        <section className="page" id="page2">
                <section className="secondpagecontent" id="Media">
                    <div>
                        <h1>Media</h1>
                    </div>
                    <div className="gallery" id="section2">
                        <iframe src="https://www.youtube.com/embed/PT_YZW8NTBY" class="img-1x2" alt="img-1x1"></iframe>
                        <img src="Photos/Media Content/media_section/images.jpeg" class="img-1x1"  alt="img-1x1" />
                        <img src="Photos/Media Content/media_section/player infront of mic.jpeg"  class="img-1x1" alt="img-1x1" />
                        <img src="Photos/Media Content/media_section/download (1).jpeg" class="img-1x1" alt="img-1x1" />
                    </div>
                </section>
        </section>
    )
}

// ReactDOM.render(<Page2 />,document.getElementById("root"))

export default Page2;