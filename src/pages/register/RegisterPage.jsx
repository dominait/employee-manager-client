import React from 'react';
import styled from 'styled-components'
 
import FormInput from 'components/forms'
import Button from 'components/buttons'
const RegisterPageStyles = styled.div `
   color: #37474f;
  max-width: 320px;
  margin: 6rem auto 0;
  header{
    margin-bottom: 2.25rem;
  }
   
  h2{
    font-size:1.8rem;
    color:#585656;
  }
  button{
    margin-top:0.5rem;
  }
  
  
`

function RegisterPage(props){

return (
     <RegisterPageStyles>
        <header>
          <h2>
             Sign Up For Free Trial
          </h2>
        </header>
       <FormInput label="name on the account" type="text" id="account"/>
       <FormInput label="email" type="email" id="email"/>
       <FormInput label="password" type="password"/>
       <Button type="action" label="free trial account sign up"></Button>
       {props.children}
     </RegisterPageStyles>
  )

}

export default RegisterPage 
 
