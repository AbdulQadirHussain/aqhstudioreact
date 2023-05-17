import React from 'react';

function add(a,b){
    let add = a+b;
    return add;
}

function sub(a,b){
    let sub = a-b;
    return sub;
}

function multi(a,b){
    let multiply = a*b;
    return multiply;
}

function div(a,b){
    let division = a/b;
    division = division.toFixed(2);
    return division;
}


export {add, sub, multi, div};