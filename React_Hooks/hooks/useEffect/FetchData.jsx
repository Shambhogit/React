import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDataAPI();
  },[]);

  const fetchDataAPI = async () => {
    const jsonData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await jsonData.json();

    console.log(result);
  };
  return <div>FetchData</div>;
};

export default FetchData;
