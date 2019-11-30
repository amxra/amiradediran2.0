import React from 'react';
import styled from 'styled-components';
import NavTwo from './nav2'



const StyledContainer = styled.div`
   border-sizing: box-border;
   width: 100%;
   height: 70vh;
   display: flex;
   align-items: center;
   margin: 3rem 0;
   justify-content: center;

   .aboutme{
        border-sizing: box-border;
        display:flex;
        justify-content:space-between;
        align-items: center;
        margin-top: 3rem;
        border: 1px solid black;
        border-radius:2rem;
        padding: 2rem;
        height: 100%;
        width: 80%;
   }
   

   .aboutme-image{
       width: 40%;
       height: 80%;
       
       img{
           width: 80%;
           height: 100%;
       }
   }
   .aboutme-text{
        box-sizing: border-box;
        width: 50%;
        height: 100%;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: scroll;

        ul{
            list-style-type: none;
            padding-left:0;
        }

        a{
            text-decoration: none;
            color:#FF6961;
            padding-right: 1rem;
        }

        a:hover{
            color: #686868;
        }
   }
}
`


class About extends React.Component{
    render(){
        return(
            
            <div className = "about-container">
                <NavTwo/>
                <StyledContainer>
                <div className = "aboutme">
                    <div className = "aboutme-image">
                        <img src = "https://amiradediran.netlify.com/resources/media/7a8ac0be-87df-4375-9ba6-3361f3f0cd7b%202.JPG" alt = "author"/>
                    </div>
                    <div className = "aboutme-text">
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
                </StyledContainer>
            </div>
            
            
        )
    }
}

export default About;