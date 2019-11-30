import React from "react";
import NavTwo from './nav2';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
`


class Work extends React.Component{
    render(){
        return(
            <div className = "work-container">
                <NavTwo/>
                <StyledH1>
                    <h1>Work Coming Soon...</h1>
                </StyledH1>
                
            </div>
            
        )
    }
}

export default Work;