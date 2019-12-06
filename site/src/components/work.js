import React from "react";
import NavTwo from './nav2';
import styled from 'styled-components';
import MobileNav from './mobilenav';
import amiradediran2 from './assets/amiradediran2.png'
import amiradediran from './assets/amiradediran.png'
import restaurantpassport from './assets/restaurantpassport.png'
import chefdiaries from './assets/chefdiaries.png'
import howto from './assets/how-to.png'
import rickandmorty from './assets/rickandmorty.png'




const StyledContainer = styled.div`
    box-sizing: border-box;
    height: 100%;
    display: flex;
    align-items: center;
    margin-top: 2.5rem;

    @media only screen and (max-width: 800px){
        margin-top: 7.3rem;
    }

    .work{
        width: 80vw;
        height: 100%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 30% 30% 30%;
        grid-template-rows: 30% 30% 30%;
        grid-column-gap: 10px;
        grid-row-gap: 10px;

        @media only screen and (max-width: 800px){
            grid-template-columns: 100%;
            grid-template-rows: repeat(9, 1fr);
            margin-top: 5rem;
        }

        .box{
            box-sizing: border-box;
            border: 1px solid black;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            
       

            p{
                font-size: 10px;
            }

            ul li{
                font-size: 8px;
                display: inline;
                border: 1px solid #686868;
                margin: 0 0.5rem;
                padding: 0 0.5rem;
            }

            .box-image{
                width: 80%;
                height: 60%;

                img{
                    width: 100%;
                    height: 100%;
                }
            }

            .box-stack{
                
                ul{
                    margin:0;
                }
            }
        }

        
    }
`

const HideNav = styled.div`
    @media only screen and (max-width:800px){
        .largenav{
            display: none;
        }
    }

    @media only screen and (min-width:799px){
        .smallnav{
            display: none;
        }
    }
`


class Work extends React.Component{
    render(){
        return(
           
            <div className = "work-container">
                <header>
                    <HideNav>
                        <div className = 'largenav'>
                            <NavTwo/>
                        </div>
                        <div className = 'smallnav'>
                            <MobileNav/>
                        </div>
                    </HideNav>
                </header>
                <StyledContainer>
                 <div className = "work">
                     <div className = "box one">
                        <div className = 'box-image'>
                            <a target = 'blank'href = "https://amiradediran.com"><img src ={amiradediran2} alt = 'site'/></a>
                        </div>
                        <div className = 'box-text'>
                            <p>This is the current version of my website</p>
                        </div>
                        <div className = 'box-stack'>
                            <ul className = "stack">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>jQuery</li>
                                <li>React</li>
                            </ul>
                        </div>
                     </div>
                     <div className = "box two">
                        <div className = 'box-image'>
                            <a target = 'blank'href = "https://therestaurantpassport.netlify.com"><img src ={restaurantpassport} alt = 'site'/></a>
                        </div>
                        <div className = 'box-text'>
                            <p>This is a multipage UI assigment designed </p>
                        </div>
                        <div className = 'box-stack'>
                            <ul className = "stack">
                                <li>HTML</li>
                                <li>CSS/LESS</li>
                            </ul>
                        </div>
                     </div>
                     <div className = "box three">
                        <div className = 'box-image'>
                            <a target = 'blank'href = "https://front-end-dnn10lqgm.now.sh/login"><img src ={chefdiaries} alt = 'site'/></a>
                        </div>
                        <div className = 'box-text'>
                            <p>This is a web application built with a team. I was a part of the frontend team that brought this to live! I also deisgned this.</p>
                        </div>
                        <div className = 'box-stack'>
                            <ul className = "stack">
                                <li>HTML</li>
                                <li>CSS/LESS</li>
                                <li>React</li>
                            </ul>
                        </div>
                     </div>
                     <div className = "box four">
                        <div className = 'box-image'>
                            <a target = 'blank'href = "https://sprint-rickandmorty.netlify.com/"><img src ={rickandmorty} alt = 'site'/></a>
                        </div>
                         <div className = 'box-text'>
                            <p>This is a web application i designed and built using the rick and morty API</p>
                         </div>
                         <div className = 'box-stack'>
                            <ul className = "stack">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React</li>
                            </ul>
                        </div>
                     </div>
                     <div className = "box five">
                         <div className = 'box-image'>
                            <a target = 'blank'href = "https://how-to-dls5aefb1.now.sh/"><img src ={howto} alt = 'site'/></a>
                         </div>
                         <div className = 'box-text'>
                            <p>This is a web application built with a team. I was a part of the frontend team that brought this to live! I also designed this.</p>
                         </div>
                         <div className = 'box-stack'>
                            <ul className = "stack">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React</li>
                            </ul>
                        </div>
                     </div>
                     <div className = "box six">
                        <div className = 'box-image'>
                            <a target = 'blank'href = "https://amxra.github.io/amiradediran/"><img src ={amiradediran} alt = 'site'/></a>
                        </div>
                         <div className = 'box-text'>
                            <p>This is the first version of my personal website.</p>
                         </div>
                         <div className = 'box-stack'>
                            <ul className = "stack">
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                     </div>
                     <div className = "box seven"></div>
                     <div className = "box eight"></div>
                     <div className = "box nine"></div>
                 </div>
                 </StyledContainer>
            </div>
            
            
        )
    }
}

export default Work;