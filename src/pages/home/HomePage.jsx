import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "components/icons/Logo";
import Button from "components/buttons";

const BrandingStyles = styled.header`
  text-align: center;
  color: #37474f;
  max-width: 420px;
  margin: 6rem auto 0;
  svg {
    width: 72px;
    margin-bottom: 0.5rem;
  }
  h1 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;;
    margin: 0 auto 1.5rem;
    color: #9dacb3;
    
   width: 70%;
  
  }
  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{margin:0; color:grey;font-weight:bold; font-size: 13px;}
  }
  a {
    text-decoration: none;
    width: 90%;
    border: inherit;
    font-size: 1.25rem;
    font-weight: 500;
    background-color: inherit;
    color: #8e979c;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
    padding: 0.5rem 1rem;
     
  }
  .login {
    background: linear-gradient(to top, #3f51b5, #2196f3);
    color: white;
  }
  .register {
    background: linear-gradient(to top, #de1111, #f52415);
    color: white;
    margin:0.25rem auto 0.5rem;
  }
`;

function HomePage(props) {
  const handleClick = (a, b) => {
    console.log(props);
  };
  return (
    <BrandingStyles>
      <Logo />
      <h1>Employee Manager</h1>
      <p>focus on your employees while we take care of the papperwork.</p>
      <div className="buttons">
        <p>no credit card required on trial accounts</p>
        <Link className="register" to="/register">
          Sign Up For A Free Unlimited Trial 
       
        </Link>

        <Link className="login" to="/login">
          Login To Your Account
        </Link>
      </div>
    </BrandingStyles>
  );
}

export default HomePage;
