import React from "react";

export default function Modal({ selectedImg, setSelectedImg }: any) {
  const handleClick = (e: any) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt="big pic" />
    </div>
  );
}
