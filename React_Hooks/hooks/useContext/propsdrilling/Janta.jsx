import React from 'react'
import MyContext from '../MyContext'

import { useContext } from 'react'

const Janta = () => {
  const context = useContext(MyContext);
  return (
    <div>this is Janta recived {context.money}  </div>
  )
}

export default Janta