import React, { Component } from 'react';
import styled from 'styled-components';
import {Motion, spring} from 'react-motion';
import img from './header-bg.jpg';
import style from './App.css';

let Div = styled.div`
// background: black;
color: white;
height: 10vh;
width: 100%;
align-items: center;
padding: 10px;
margin: 0px;
position: absolute;
top: 0;
display: flex;
justify-content: space-around;
font-size: 1.5em;
word-spacing: 10px;
`
// @Media(max-width: 600px){
//   Div{}
// }

let HeroImg = styled.div`
width:50vh; 
height:150px;
`

let MiddleWords = styled.div`
font-size: 2em;
// position: absolute;
// top: 350px;
// left: 700px;
color: white;
display:flex;
justify-content: center;
text-align: center;
`

let BigMiddleWords = styled.div`
font-size: 4em;
color: white;
text-align: center;
// position: absolute;
// top: 450px;
// left: 525px;
`

class App extends Component {
  render() {
    return (
      <div>
        <div class = "menu">
      &#x2630;  
    </div>
          <Div>
          <div className="yellowName">Start Bootstrap</div>
          <div className="disappear">
          <span> Services </span>
          <span> Portfolio </span>
          <span> About </span>
          <span> Team </span>
          <span> Contact </span>
          </div>
          </Div>
          
          <HeroImg>
            <div className="backgroundImg">
          <img src={img} alt='background img' />
          </div>
          </HeroImg>

          <MiddleWords>
            <div className="middleWords">Welcome to our studio!</div>
          </MiddleWords>

          <BigMiddleWords><div className="bigMiddleWords">IT'S NICE TO MEET YOU</div></BigMiddleWords>
      </div>
    );
  }
}

export default App;
