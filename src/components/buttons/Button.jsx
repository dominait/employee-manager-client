import React from 'react';
import styled, {css} from 'styled-components'

const ButtonStyles = styled.button `
       width:100%;
       border:inherit;
       font-size: 1rem;
       background-color:inherit;
       color:#8e979c;
       border-radius:4px;
       box-shadow:0 0 3px 0 rgba(0,0,0,0.2);
       padding:0.65rem 1rem;
       margin-bottom: 0.5rem;
       ${props => props.type === "signup" && 
         css`
         background: #f15b29;
         color:white;
         `
        }
          ${props => props.type === "login" && 
         css`
         background: #03a9f4;
         color:white;
         `
        }
`
// Option Conditionally Render Component #03a9f4

function Button(props){
      
               return(
                   <ButtonStyles {...props}>
                       {props.label}
                       {props.children}
                   </ButtonStyles>
               )

       
}

export default Button 
 
