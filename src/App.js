import React, { Component } from 'react';
import styled from 'styled-components';
// import {Motion, spring} from 'react-motion';
import img from './header-bg.jpg';
import './App.css';

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


let HeroImg = styled.div`
width:100vw; 
height:150px;
object-fit:contain;
`

let MiddleWords = styled.div`
font-size: 2em;
color: white;
display:flex;
justify-content: center;
text-align: center;
`

let BigMiddleWords = styled.div`
font-size: 4em;
color: white;
text-align: center;
`

class App extends Component {
  constructor(){
    super()
    this.state = {
    sideNav: false,
    
  };
}
  
  render() {
    const {sideNav} = this.state;

    return (
      <div>
    <div>
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
        <div className = "menu" onClick={()=>this.setState({sideNav:!sideNav})}>&#x2630;  
    </div>
    
      {sideNav && <div className="seeingIfThisWorks">
          <span> Services </span>
          <span> Portfolio </span>
          <span> About </span>
          <span> Team </span>
          <span> Contact </span>
          </div>}
          
          <HeroImg>
            <div className="backgroundImg">
          <img src={img} alt='background img' />
          </div>
          </HeroImg>

          <MiddleWords>
            <div className="middleWords">Welcome to our studio!</div>
          </MiddleWords>

          <BigMiddleWords>
            <div className="bigMiddleWords">IT'S NICE TO MEET YOU</div></BigMiddleWords>

          {/* <div className="seeingIfThisWorks">does this work?</div> */}
      </div>
    );
  }
}

export default App;
