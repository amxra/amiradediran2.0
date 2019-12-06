import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`

    box-sizing: border-box;
    width: 100%;
    text-align: right;
    background-image: radial-gradient(grey 20%, rgba(0,0,0,0) 20%);
        background-position: 0 0;
         background-size: 5px 5px;

    .navigationTwo{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 1rem;
        box-sizing: border-box;
    }
    
    
    .header{
        font-size: 36px;

        a:hover{
            color: #686868;
        }
    }

    a{
      padding: 0 1rem;
      color: black;
      text-decoration: none;
    }
    a:hover{
      color: #FF6961;
    }

`


class NavTwo extends React.Component{
    render(){
        return(
            <StyledHeader>
            <div className = "navigationTwo">
            <div className = "header">
                <Link to = "/">Amira Adediran</Link>
            </div>
            <div className = "nav-container">
                <Link to = "/about">About</Link>
                <Link to = "/work">Work</Link>
                <Link to = "/contact">Contact</Link>
            </div>
            </div>
            </StyledHeader>
        )
    }
}

export default NavTwo;