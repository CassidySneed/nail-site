import React from 'react';
import RandomSpace from './RandomNP';
import './Title.css';

function Title() {
    return (
         <div className="Title">
            <header >
                <h1>Cassidy's Nailpolish</h1>
                <h5>Brought to you by Cassidy Sneed</h5>
                
                <a style={{textDecoration: 'none', color: 'white'}} href='/'>Home</a>
               
                {/* <small className="Title-Subtitle">Brought to you by Cassidy Sneed</small> */}
                <RandomSpace />
                <a style={{marginLeft: 10, textDecoration: 'none', color: 'white'}} href='/about'>Sign Up</a>
           </header>
         </div>
    )
  }
  
  export default Title