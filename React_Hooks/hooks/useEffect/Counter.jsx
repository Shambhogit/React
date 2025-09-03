import React from "react";

const Counter = () => {
  const [counter, seCounter] = useState(0);
  useEffect(() => {
    document.title = `counter = ${counter}`;
  }, [counter]); //dependency array
  return (
    <div>
      <h1>Counter = {counter}</h1>

      <button onClick={() => seCounter(counter + 1)}>Increase Value</button>
      <button onClick={() => seCounter(counter - 1)}>Decrease Value</button>
    </div>
  );
};

export default Counter;
