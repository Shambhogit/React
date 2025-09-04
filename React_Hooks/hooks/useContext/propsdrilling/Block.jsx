import React from 'react'
import Panchayat from './Panchayat'

const Block = ({money}) => {
  return (
    <div>this is Block
        <Panchayat money={money}/>
    </div>
  )
}

export default Block