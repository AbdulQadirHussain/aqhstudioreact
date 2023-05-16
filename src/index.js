import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Heading from './Heading';


// Inline CSS On h2 line #20
const heading2 = {
    color: '#C4A484',
    margin: '20px 0px',
    textAlign: 'center',
    fontFamily: "'Josefin Sans', sans-serif"
}


ReactDOM.render(
    <>
    <Heading /> 
    <h2 style={heading2}>GALLERY</h2>
    <App />
    </>,
    document.getElementById('root')
);