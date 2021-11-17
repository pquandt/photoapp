import React from "react";

type tagName = {
  tagName: string;
};

export default function Tag({ tagName }: tagName) {
  return <div className="tag">{tagName}</div>;
}
