import React from 'react';
import styled from 'styled-components'

const LoginStatusStyles = styled.div `
display:inline-flex;
align-items:center;
gap:0.35rem;
font-size:12px;
color: tomato;
   .circle{   
   
       background:tomato;
       width:8px;
       height:8px;
       box-shadow: 0 0 3px 1px tomato;
       border-radius:50%;
   }
`

function LoginStatus(props){

return (
     <LoginStatusStyles>
         <span className="circle"></span>
         <span>{props.label}</span>
     </LoginStatusStyles>
  )

}

export default LoginStatus 
 
