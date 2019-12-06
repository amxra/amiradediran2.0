import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`

.nav-container{
  box-sizing: border-box;
  width: 100%;
  padding: 1.5rem;
  text-align: right;

  @media only screen and (max-width:800px){
    display: flex;
    justify-content: space-around;
  }

  a{
    padding: 1rem;
    color: white;
    text-decoration: none;
    font-size: 18px;
  }
  a:hover{
    color: #FF6961;
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