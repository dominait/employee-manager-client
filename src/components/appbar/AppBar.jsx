import React from 'react';
import styled from 'styled-components'
import LoginStatus from '../loginstatus';

const AppBarStyles = styled.ul `
  box-shadow:0 0 3px 0 grey;
  padding: 1rem;
  ul{
      display:flex;
      justify-content:space-between;
  }
`

 

 

function AppBar (props){
    return(
        <AppBarStyles>
            <ul>
                <li>
                    employee manager
                </li>
                <li>
                   <LoginStatus label="logged out"/>
                </li>
            </ul>
        </AppBarStyles>
    )
}

export default AppBar