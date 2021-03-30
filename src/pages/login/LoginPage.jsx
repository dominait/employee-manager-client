import React from 'react';
import styled from 'styled-components'
import FormInput from 'components/forms';
import Button from 'components/buttons'
const LoginPageStyles = styled.form `
   
  color: #37474f;
  max-width: 320px;
  margin: 6rem auto 0;
 
   &::first-child{margin:3rem;}
  h2{
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }
  
`

function LoginPage(props){

return (
     <LoginPageStyles>
       <header>
            <h2>Login</h2>
        </header>
       <FormInput label="email" type="email" id="email"/>
       <FormInput label="password" type="password"/>
       <Button type="submit">Login</Button>
       {props.children}
     
    </LoginPageStyles>
  )

}

export default LoginPage 
 
