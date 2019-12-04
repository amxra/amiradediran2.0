import React from 'react';
import { Link } from 'react-router-dom';
import circles from './assets/circles.svg';
import styled from 'styled-components';


const NavigationStyle = styled.div`

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
    .mobile-nav{
      // display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .nav-container{
        display: none;
    }
}

`

const MobileNav = styled.div`

width: 100%;

nav{
    width: 100%;
    height: 100%;
}

.mobile-nav{
    width: 100%;
    height: 100%;
}

nav{
    height: 10vh;
    background-color: #5b78c7;
}

.nav-links{
    display: flex;
    list-style-type: none;
    width 50%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    // margin-left: auto;
    
}

.nav-links li a{
    color: white;
    text-decoration: none;
    font-size: 16px;
}

.landing{
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  
    h1{
        margin: 100px
        font-size: 50px;
        color: #ae5fce;
    }
}

@media screen and (max-width: 768px) {

    .line{
        width: 30px;
        height:3px;
        background: white;
        margin: 5px;
    }

    nav{
        position: relative;
    }

    .hamburger{
        position: absolute;
        cursor: pointer;
        right: 5%;
        top: 50%;
        transform:translate(-5%, -50%)
    }

    .nav-links{
        position: fixed;
        background-color: #5b78c7;
        height: 100vh;
        width: 100vh;
        flex-direction: column;
        clip-path: circle(100px at 90% -10%);
        -webkit-clip-path: circle(100px at 90% -10%);
        transition: all 1s ease out; 
    }

    .nav-links.open{
        clip-path: circle(1300px at 90% -10%);
        -webkit-clip-path: circle(1300px at 90% -10%);
    }
    
    .landing{
        flex-direction: column;
    }
}

`

function Navigation(){

    




    return(
        <div>
            <NavigationStyle>
                <div className = "nav-container">
                    <Link to = "/about">About</Link>
                    <Link to = "/work">Work</Link>
                    <Link to = "/contact">Contact</Link>
                </div>
        </NavigationStyle>
        <MobileNav>
        <div className = 'mobile-nav'>
            <nav>
                <div className = 'hamburger'>
                    <div className = 'line'></div>
                    <div className = 'line'></div>
                    <div className = 'line'></div>
                </div>
                <ul className = 'nav-links'>
                    <li><Link to = "/about">About</Link></li>
                    <li><Link to = "/work">Work</Link></li>
                    <li><Link to = "/contact">Contact</Link></li>
                </ul>
                <section className = 'landing'>
                    <img src = {circles} alt = 'circle'/>
                    <h1>Dots</h1>
                </section>
            </nav>
        </div>
    </MobileNav>
    </div>
    )
}


export default Navigation;