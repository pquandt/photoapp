import React from "react";

type TitleProps = {
  upTitle: string;
  downTitle: string;
};

export default function Title({ upTitle, downTitle }: TitleProps) {
  return (
    <div className="Headline">
      <h1 className="Apptitle">{upTitle}</h1>
      <h1 className="Apptitle-author">{downTitle}</h1>
    </div>
  );
}
