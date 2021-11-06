import React from "react";

type ButtonText = {
  onClick: () => void;
  text: string;
};

export default function RoundButton({ text, onClick }: ButtonText) {
  return (
    <div className="RoundButton" onClick={onClick}>
      {text}
    </div>
  );
}
