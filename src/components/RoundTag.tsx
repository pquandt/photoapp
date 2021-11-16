import React from "react";

export type ButtonText = {
  onClick: any;
  text: string;
  fontsize?: number;
  filter?: string;
  docName?: any;
};

export default function RoundTag({
  text,
  onClick,
  fontsize,
  filter,
  docName,
}: ButtonText) {
  return (
    <div
      className={filter === docName ? "RoundTag-active" : "RoundTag"}
      onClick={onClick}
      style={{ fontSize: fontsize }}
    >
      {text}
    </div>
  );
}
