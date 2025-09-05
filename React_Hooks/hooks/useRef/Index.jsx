import React, { useRef, useState } from "react";

const Index = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2025/08/17/07/43/tractor-9779346_640.jpg",
    "https://cdn.pixabay.com/photo/2025/06/10/09/26/cliffs-9651766_640.png",
    "https://cdn.pixabay.com/photo/2025/08/21/13/58/grassland-9787999_640.jpg",
  ];
  const imageRef = useRef();

  const [idx, setIdx] = useState(0);

  const handleClick = () => {
    setIdx((idx + 1) % images.length);
    imageRef.current.src = images[idx];
  };

  return (
    <div>
      <h1>Change Image Using useRef</h1>
      <img
        ref={imageRef}
        src="https://cdn.pixabay.com/photo/2025/08/17/07/43/tractor-9779346_640.jpg"
        alt=""
      />
      <button onClick={handleClick}>Change image</button>
    </div>
  );
};

export default Index;
