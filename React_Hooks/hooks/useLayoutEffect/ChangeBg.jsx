import React, { useLayoutEffect, useState } from 'react'

const ChangeBg = () => {
    const [color, setColor] = useState('lightblue');
    const [nextColor, setNextColor] = useState('yellow');
    useLayoutEffect(()=>{
        document.body.style.backgroundColor = color;
    }, [color]);

    const changeColor = () =>{
        let tempColor = color;
        setColor(nextColor);
        setNextColor(tempColor);
    }
  return (
    <div>
        <button onClick={changeColor}>Change color</button>
    </div>
  )
}

export default ChangeBg