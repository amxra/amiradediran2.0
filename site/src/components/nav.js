import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyleNav = styled.nav`
    .nav-container{
        box-sizing: border-box;
        width: 100%;
        padding: 1.5rem;
        text-align: right;

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

    @media only screen and (max-width: 768px){
        .nav-container{
            text-align: center;
            
            a{
                padding: 1rem 5rem;
            }
        }
    }

`

function Navigation(){
    return(
        <StyleNav>
            <div className = "nav-container">
                <Link to = "/about">About</Link>
                <Link to = "/work">Work</Link>
                <Link to = "/contact">Contact</Link>
            </div>
        </StyleNav>
    )
}


export default Navigation;