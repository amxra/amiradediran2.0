
import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import NavTwo from './nav2'

 const StyledContainer = styled.div`
     box-sizing: border-box;
     width: 100%;
     height: 80vh;
     display: flex;
     justify-content: center;
     align-items: center;

     .contact-form{

         box-sizing: border-box;
         border: 1px solid #FF6961;
         width: 100%;
         height: 70%;
         border-radius: 19px;
         padding: 2rem;

         h1{
             color: #686868;
         }
     }

     form{
         margin-top: 3rem;
         padding: 0 5rem;
         text-align: left;
     }

     button{
         background-color: #FF6961;
         color: #fff;
         margin-top: 1rem;
         margin-left: 350px;
         border: 1px solid #FF6961;
     }
    
     input[type="text"],
     input[type="email"],
     textarea{
         margin-top: 1.1rem;
         border: 1px solid #FF6961;
         color: #606060;
         padding: 0 2rem;
     }

     textarea{
         padding: 2rem;
     }

     input[type="text"],
     input[type="email"]{
         border-color: #fff #fff #FF6961 #fff;
     }


     label{
         display:block;
     }
 `

function Contact() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/amiradediran@gmail.com",
      data: new FormData(form)
    })
      .then(response => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(response => {
        handleServerResponse(false, response.response.data.error, form);
      });
  };
  return (
    <div className = "contact-container">
        <NavTwo/>
        <StyledContainer>
        <div className = "contact">
        <div class = "contact-form">
            <h1>Hello!</h1>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="name">Hi, my name is
                <input id="text" type="text" name="name" required/>.
                </label>
                <label htmlFor="name"> I am messaging to talk to you about 
                <input id="text" type="text" name="name" required/>.
                </label>
                <label htmlFor="email">You can respond to my email at
                <input id="email" type="email" name="email" required />
                .</label>
                <label htmlFor="message">
                <textarea id="message" name="message" cols="45" rows="15" ></textarea>
                </label>
                <button type="submit" disabled={serverState.submitting}>
                Submit
                </button>
                {serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                    {serverState.status.msg}
                </p>
                )}
            </form>
      </div>
    </div>
      </StyledContainer>
    </div>
  );
};

export default Contact;