import React, { useCallback, useState } from "react";
import Button from "./Button";

const Index = () => {
  const [count, setCount] = useState(0);
  const [darkmode, setDarkmode] = useState(false);

  // const handleClick=()=>{
  //     setCount(count+1);
  // }

  const handleClick = useCallback(() => {
    setCount((prev)=>prev+1);
  }, []);

  return (
    <div
      style={{
        background: darkmode ? "#333" : "#fff",
        color: darkmode ? "#fff" : "#333",
      }}
    >
      <h1>Count : {count}</h1>
      <Button onClick={handleClick}></Button>
      <button onClick={() => setDarkmode(!darkmode)}>Toggle Theme</button>
    </div>
  );
};

export default Index;
