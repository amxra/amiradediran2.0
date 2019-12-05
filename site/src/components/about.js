import React from 'react';
import styled from 'styled-components';
import NavTwo from './nav2';
import MobileNav from './mobilenav';


const PageStyle = styled.div`

    box-sizing: border-box;
    height: 100vh;

    @media only screen and (max-width:800px){
        // border: 1px solid yellow;
        height: auto;
    }
    


    .aboutme{
        display: flex;
        justify-content: space-around;
        flex-direction: row-reverse;
        align-items: center;
        height: 80vh;
        width: 80vw;
        margin: 0 auto;
        
        .aboutme-image{
            width: 40%;
            height: 70%;
            display: flex;
            align-items: center;
            justify-content: center;


            img{
                width: 90%;
                height: 100%;
                         
            }
        }

        .aboutme-text{
            width: 55%;
            text-align: left;
            padding: 1.5rem;
            padding-left: 3rem;

            ul{
                padding-left: 0;

                li{
                    list-style: none;

                }
            }

            a{
                text-decoration: none;
                color:#FF6961;
                margin-left: 1rem;

            }

            a:hover{
                color: #686868;
            }
        }
        
    }

    @media only screen and (max-width:800px){
        .aboutme{
            box-sizing: border-box;
            width: 90%;
            margin: 0 auto;
            flex-direction: column;
            height: auto;
            margin-top: 10rem;
        
            .aboutme-image{
                box-sizing: border-box;
                width:80%;
                height:500px;
                
            
                    img{
                        width: 100%;
                        height: 100%;
                    }
            }
        
            .aboutme-text{
                // box-sizing: border-box;
                width: 100%;

                
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

class About extends React.Component {
    render(){
        return(
            <PageStyle>
            <div className = 'about-container'>
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
                <div className = 'aboutme'>
                    <div className = 'aboutme-image'>
                        <img src = "https://amiradediran.netlify.com/resources/media/7a8ac0be-87df-4375-9ba6-3361f3f0cd7b%202.JPG" alt = "author"/>
                    </div>

                    <div className = 'aboutme-text'>
                    <p>Hi, My name is Amira Adediran. I am a full stack developer. </p>
                         <p>I build responsive, interactive, alluring websites and web applications using: 
                             <ul>
                                 <li>HTML</li>
                                 <li>CSS</li>
                                 <li>JavaScript</li>
                                 <li>JQuery</li>
                                 <li>React</li>  
                             </ul>
                             I am also able to perform client-side authentication and implement CRUD operation.
                         </p>
                         <p>On the Backend, I use: 
                             <ul>
                                 <li>Node.js</li>
                                 <li>Express</li>
                             </ul>
                             to build RESTful APIs. 
                         </p>
                         <p>I am passionate about all aspects of web technology.</p><p>When I'm not coding or tweeting you'll find me baking, sleeping or trying hard to motivate myself to work out, I also enjoy practicing yoga. </p>
                         <p>Profiles: <a href = "https://www.github.com/amxra">Github</a> <a href = "https://codepen.io/amxra">Codepen</a> <a href = "https://www.linkedin.com/in/amira-adediran-8308b4196/">Linkedin</a></p>
                   
                    </div>

                </div>
            </div>
            </PageStyle>
        )
    }
}



export default About;