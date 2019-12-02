import React from "react";
import NavTwo from './nav2';
import styled from 'styled-components';
import site from './assets/amiradediran.png'


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
        grid-template-columns: 25% 25% 25% 25%;
        grid-template-rows: 30% 30% 30%;
        grid-column-gap: 10px;
        grid-row-gap: 10px;

        .box{
            border: 1px solid black;
            padding: 1rem;
            img{
                width: 98%;
                height: 98%;
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
                         <a target = 'blank'href = "https://amxra.github.io/amiradediran/"><img src ={site} alt = 'site'/></a>
                     </div>
                     <div className = "box two">two</div>
                     <div className = "box three">three</div>
                     <div className = "box four">four</div>
                     <div className = "box five">five</div>
                     <div className = "box six">six</div>
                     <div className = "box seven">seven</div>
                     <div className = "box eight">eight</div>
                     <div className = "box nine">nine</div>
                 </div>
                 </StyledContainer>
            </div>
            
            
        )
    }
}

export default Work;