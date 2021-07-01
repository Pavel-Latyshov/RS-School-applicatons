import React from 'react';
const GameComponent = ({item}: any) => {   
    const itemName = item[0];
    const imageSrc = Object.entries(item[1]);
    console.log(imageSrc);
    
    const imageNames: any = imageSrc[0][1]
    // console.log(imageNames);
    const imageArr = [];
    for (let keys of Object.keys(imageNames)) {
        // console.log(keys);
        imageArr.push(keys)
        
    }
    // console.log(imageArr);
    const gameRender = imageArr.map(item => {
        // console.log(item);
        
        return <div>
        <img src={process.env.PUBLIC_URL + `${item}`}alt="#"/></div>
    })
   
    return (
        <div>

            <div>{gameRender}</div>
        </div>
    )
}

export default GameComponent