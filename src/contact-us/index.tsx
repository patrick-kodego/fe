import React from "react";

function ContactUs() {
    
    const generateJoke = ()=>{
        alert('something')
    } 

    return (
        <>
           <div>
              <h1>welcome to contact us</h1>
              <button onClick={generateJoke}>Contact Us</button>
           </div>
        </>
    );
}

export default ContactUs;