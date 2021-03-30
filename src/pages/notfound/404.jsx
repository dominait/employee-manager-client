import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const  PageNotFoundStyles = styled.header `
  margin: 6rem auto 0;
  text-align:center;
  h1{
      font-size: 2rem;
  }
`

function  PageNotFound (props){

return (
     <PageNotFoundStyles>
      <header>
            <h1>Page Not Found</h1>
            <p>insert link to go back to home page</p>
            <Link to="/">return home</Link>
        </header>
       {props.children}
     </PageNotFoundStyles>
  )

}

export default  PageNotFound 
 

 