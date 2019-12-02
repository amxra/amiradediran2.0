import React from "react";
import NavTwo from './nav2';
import styled from 'styled-components';
import amiradediran2 from './assets/amiradediran2.png'
import amiradediran from './assets/amiradediran.png'
import restaurantpassport from './assets/restaurantpassport.png'
import chefdiaries from './assets/chefdiaries.png'
import howto from './assets/how-to.png'



const StyledContainer = styled.div`
    box-sizing: border-box;
    height: 85vh;
    display: flex;
    align-items: center;

    .work{
        width: 80vw;
        height: 80%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 30% 30% 30%;
        grid-template-rows: 30% 30% 30%;
        grid-column-gap: 10px;
        grid-row-gap: 10px;

        .box{
            border: 1px solid black;
            padding: 1rem;

            p{
                font-size: 10px;
            }

            img{
                width: 70%;
                height: 60%;
            }
        }

        
    }
`


class Work extends React.Component{
    render(){
        return(
           
            <div className = "work-container">
                <NavTwo/>
                <StyledContainer>
                 <div className = "work">
                     <div className = "box one">
                         <a target = 'blank'href = "https://amiradediran.com"><img src ={amiradediran2} alt = 'site'/></a>
                         <p>This is the current version of my website built with React and jQuery</p>
                     </div>
                     <div className = "box two">
                        <a target = 'blank'href = "https://therestaurantpassport.netlify.com"><img src ={restaurantpassport} alt = 'site'/></a>
                        <p>This is a multipage UI assigment designed and built by me using pure HTML and CSS</p>
                     </div>
                     <div className = "box three">
                        <a target = 'blank'href = "https://front-end-dnn10lqgm.now.sh/login"><img src ={chefdiaries} alt = 'site'/></a>
                        <p>This is a web application built with a team. I was a part of the frontend team that brought this to live! This was built using React</p>
                     </div>
                     <div className = "box four">
                         <a target = 'blank'href = "https://how-to-dls5aefb1.now.sh/"><img src ={howto} alt = 'site'/></a>
                         <p>This is a web application built with a team. I was a part of the frontend team that brought this to live! This was built using react</p>
                     </div>
                     <div className = "box five">
                        <a target = 'blank'href = "https://amxra.github.io/amiradediran/"><img src ={amiradediran} alt = 'site'/></a>
                         <p>This is the first version of my personal website. It was built using pure HTML and CSS.</p>
                     </div>
                     <div className = "box six">coming ...</div>
                     <div className = "box seven">coming ...</div>
                     <div className = "box eight">coming ...</div>
                     <div className = "box nine">coming ...</div>
                 </div>
                 </StyledContainer>
            </div>
            
            
        )
    }
}

export default Work;