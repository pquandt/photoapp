import React from "react";

type TitleProps = {
  titlename: string;
};

export default function Title({ titlename }: TitleProps) {
  return (
    <div className="Headline">
      <h1 className="Apptitle">{titlename}</h1>
    </div>
  );
}
