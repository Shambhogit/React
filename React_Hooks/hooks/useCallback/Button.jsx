import React from 'react'

const Button = React.memo(({onClick}) => {
    console.log('rerender')
  return (
    <div>
        <button onClick={onClick}>Increase</button>
    </div>
  )
})

export default Button