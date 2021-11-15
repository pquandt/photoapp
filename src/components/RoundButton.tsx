import React from "react";

type ButtonText = {
  onClick: any;
  text: string;
  fontsize: number;
  active?: boolean;
  filter?: string;
  docName?: any;
};

export default function RoundButton({
  text,
  onClick,
  fontsize,
  filter,
  docName,
}: ButtonText) {
  return (
    <div
      className={filter === docName ? "RoundButton-active" : "RoundButton"}
      onClick={onClick}
      style={{ fontSize: fontsize }}
    >
      {text}
    </div>
  );
}
