import React from 'react';

const Greetings = () => {

// Greetings With Date & Time
let greetings = '';

// new Date(year, months, day, hours, minutes, seconds, milliseconds);
let currDate = new Date(2023, 5, 16, 19);
currDate = currDate.getHours();

//Object for inline css for each time greetings
const cssStyle = {}; 


if(currDate > 0 && currDate < 12){
    greetings = 'Good Morning';
    cssStyle.color = 'lightskyblue';
}
else if(currDate >= 12 && currDate < 16){
    greetings = 'Good Afternoon';
    cssStyle.color = 'lightcoral';
}
else if(currDate >= 16 && currDate <= 19){
    greetings = 'Good Evening';
    cssStyle.color = 'lightseagreen';
}
else{
    greetings = 'Good Night';
    cssStyle.color = 'midnightblue'
}


    return (
        <>
        <div className='greetings_time'>
            <h2>
               <span style={cssStyle}>{greetings} {currDate}</span>
            </h2>
        </div>    
        </>
    )
}

export default Greetings;