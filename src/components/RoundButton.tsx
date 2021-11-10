import React from "react";

type ButtonText = {
  onClick: any;
  text: string;
  fontsize: number;
  active?: boolean;
};

export default function RoundButton({
  text,
  onClick,
  fontsize,
  active,
}: ButtonText) {
  return (
    <div
      className="RoundButton"
      onClick={onClick}
      style={{ fontSize: fontsize }}
    >
      {text}
    </div>
  );
}
