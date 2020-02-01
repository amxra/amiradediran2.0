import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import Navigation from './nav';

const Container = styled.div`
    box-sizing: border-box;
    width:100%;
    height: 100vh;
    background-color: black;
    color: white;

    .nav{
      box-sizing: border-box;
    }

    .sitename{
      box-sizing: border-box;
      height: 80%;
      display:flex;
      justify-content: center;
      align-items: center;
      font-size: 10vw;
      letter-spacing: 1rem;
    }

  
`


class Home extends React.Component{

    componentDidMount(){
        $(document).ready(function() {
            let $randomnbr = $('.nbr');
            let $timer = 25;
            let $it;
            let $data = 0;
            let index;
            let change;
            let shuffle = ["A", "M", "I", "R", "A", "A", "D", "E", "D", "I", "R", "A", "N", "!"];
            
            $randomnbr.each(function() {
              
              // Set change to a number between 1 - 100
              change = Math.round(Math.random() *100);
              
              $(this).attr('data-change', change);
            });
            
            function random() {
              return Math.round(Math.random() * 9);
            };
            
            function select() {
              return Math.round(Math.random() * $randomnbr.length+1);
            };
            
            function value() {
              $('.nbr:nth-child('+ select() +')').html(''+random()+'');
              $('.nbr:nth-child('+ select() +')').attr('data-number', $data);
              $data++;
              
              $randomnbr.each(function() {
                if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                  index = $('.ltr').index(this);
                  $(this).html(shuffle[index]);
                  $(this).removeClass('nbr');
                  
                }
              });
            };
            
              $it = setInterval(value,$timer);
            
            
            });
    }
    render(){
        return(
            <Container>
            <div className = "nav">
              <Navigation/>
            </div>
  
            <div class="sitename">
                <div class="shuffle">
                    <div className = "firstname">
                        <span class="nbr ltr">N</span>
                        <span class="nbr ltr">A</span>
                        <span class="nbr ltr">D</span>
                        <span class="nbr ltr">I</span>
                        <span class="nbr ltr">M</span>
                    </div>
                    <div className = "lastname">
                        <span class="nbr ltr">R</span>
                        <span class="nbr ltr">D</span>        
                        <span class="nbr ltr">A</span>
                        <span class="nbr ltr">!</span>
                        <span class="nbr ltr">E</span>
                        <span class="nbr ltr">R</span>
                        <span class="nbr ltr">A</span>
                        <span class="nbr ltr">I</span>
                        <span class="nbr ltr">A</span>
                    </div>
                </div>
            </div>
            </Container>
        )
    }
}

export default Home;