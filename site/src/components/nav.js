import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const StyledNav = styled.div`

.nav-container{
    box-sizing: border-box;
    width: 100%;
    padding: 1.5rem;
    text-align: right;

    a{
      padding: 2rem;
      color: white;
      text-decoration: none;
      font-size: 18px;
    }
    a:hover{
      color: #FF6961;
    }
  }

  @media only screen and (max-width: 768px){
      
      .nav-container{
          text-align: center;
          
          a{
              padding: 5rem;
          }
      }
  }

}


`

function Navigation(){
    return(
        <StyledNav>
        <div className = "nav-container">
            <Link to = "/about">About</Link>
            <Link to = "/work">Work</Link>
            <Link to = "/contact">Contact</Link>
        </div>
        </StyledNav>
    )
}


export default Navigation;