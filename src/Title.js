import React from 'react';
import './Title.css';

function Title() {
    return (
         <div className="Title">
            <header >
                <h1>Cassidy's Nailpolish</h1>
                <a style={{textDecoration: 'none', color: 'white'}} href='/'>Home</a>
                <a style={{marginLeft: 10, textDecoration: 'none', color: 'white'}} href='/about'>About</a>
                {/* <small className="Title-Subtitle">Brought to you by Cassidy Sneed</small> */}
           </header>
         </div>
    )
  }
  
  export default Title