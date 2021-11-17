import React from "react";
import TextButton from "../types/TextButton";

export default function YellowBtn({ onClick, text, fontsize }: TextButton) {
  return (
    <div
      className="yellow-btn"
      onClick={onClick}
      style={{ fontSize: fontsize }}
    >
      {text}
    </div>
  );
}
