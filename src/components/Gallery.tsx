import React, { Dispatch, SetStateAction } from "react";
import useFirestore from "../hooks/useFirestore";
import Doc from "../types/Doc";
import Tag from "./Tag";

type GalleryProps = {
  filter: string;
  setSelectedImg: Dispatch<SetStateAction<Doc | null>>;
};

export default function Gallery({ filter, setSelectedImg }: GalleryProps) {
  const docs = useFirestore("images").docs as Doc[];

  const filterArray: Doc[] = [];

  docs.forEach((item) => {
    if (item.tag === filter) {
      filterArray.push(item);
    }
  });

  return (
    <div className="img-grid">
      {filterArray.length > 0 &&
        filterArray.map((doc) => (
          <div key={doc.id}>
            <figure className="img-wrap" onClick={() => setSelectedImg(doc)}>
              <img src={doc.url} alt="imagecouldntbefound" />
              <figcaption className="tag-wrap">
                <Tag tagName={doc.tag} />
              </figcaption>
            </figure>
          </div>
        ))}

      {filterArray.length === 0 &&
        docs.map((doc) => (
          <div key={doc.id}>
            <figure className="img-wrap" onClick={() => setSelectedImg(doc)}>
              <img src={doc.url} alt="imagecouldntbefound" />
              <figcaption className="tag-wrap">
                <Tag tagName={doc.tag} />
              </figcaption>
            </figure>
          </div>
        ))}
    </div>
  );
}
