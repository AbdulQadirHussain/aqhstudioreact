import React from 'react';

const Images = function (){
    
// Random Images Add for Gallery
const img1 = 'https://picsum.photos/200/300';
const img2 = 'https://www.picsum.photos/200/300';
const img3 = 'http://picsum.photos/200/300';


    return(
        <>
            <div className='images'>
                <img src={img1}/>
                <img src={img2}/>
                <img src={img3}/>
            </div>
        </>
    )
}

export default Images;