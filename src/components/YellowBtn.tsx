import React from "react";
import { ButtonText } from "./RoundTag";

export default function YellowBtn({ onClick, text, fontsize }: ButtonText) {
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
