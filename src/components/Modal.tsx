import React from "react";
import RoundButton from "./RoundButton";
import useDelete from "../hooks/useDelete";

export default function Modal({ selectedImg, setSelectedImg }: any) {
  const handleClick = (e: any) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  const deleteData = useDelete(selectedImg, setSelectedImg);

  return (
    <div>
      <div className="backdrop" onClick={handleClick}>
        <img src={selectedImg} alt="big pic" />
        <div className="deleteBtn">
          <RoundButton onClick={deleteData} text="🗑" fontsize={40} />
        </div>
      </div>
    </div>
  );
}
