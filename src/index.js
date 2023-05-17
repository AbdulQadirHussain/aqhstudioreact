import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Heading, { Func, favprog } from './Heading';
import {add, sub, multi, div} from './Calc';

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
    {favprog}
    {Func()}
    
    <br></br>
    {add(2,8)}
    <br></br>
    {sub(4,2)}
    <br></br>
    {multi(5,5)}
    <br></br>
    {div(213,34)}
    </>,
    document.getElementById('root')
);