import React, { useState, useTransition } from 'react'

const Index = () => {
    const [search, setSearch] = useState('');
    const [isPending, startTransition] = useTransition('');
    const handleChange = (e)=>{
        startTransition(()=>setSearch(e.target.value));
    }
  return (
    <div>
        <h1>This is Use Transition Hook</h1>
        <input type="text" onChange={(e)=>handleChange(e)} value={search} />
    </div>
  )
}

export default Index