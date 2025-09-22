import React from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

const App = () => {
  useGSAP(()=>{
    gsap.to('.box', {
      x:500,
      duration:2, 
      delay:1,
    })
  })

  const handleClick = () =>{
  }
  return (
    <main>
      <div onClick={handleClick} className="box"></div>
    </main>
  )
}

export default App