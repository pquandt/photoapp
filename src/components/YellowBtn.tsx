import React from "react";
import { ButtonText } from "./RoundTag";

export default function YellowBtn({ onClick, text }: ButtonText) {
  return (
    <div className="yellow-btn" onClick={onClick}>
      {text}
    </div>
  );
}
