import React from "react";
import useFirestore from "../hooks/useFirestore";

interface firedoc {
  tag: string;
  url: string;
  id: string;
}

interface GalleryProps {
  filter: string;
  setSelectedImg: any;
}

export default function Gallery({ filter, setSelectedImg }: GalleryProps) {
  const { docs } = useFirestore("images");

  const filterArray: any[] = [];

  docs.forEach((item: firedoc) => {
    if (item.tag === filter) {
      filterArray.push(item);
    }
  });

  return (
    <div className="img-grid">
      {filterArray.length > 0 &&
        filterArray.map((doc: firedoc) => (
          <div key={doc.id}>
            <p>{doc.tag}</p>
            <div
              className="img-wrap"
              onClick={() => setSelectedImg([doc.url, doc.id])}
            >
              <img src={doc.url} alt="imagecouldntbefound" />
            </div>
          </div>
        ))}

      {filterArray.length === 0 &&
        docs.map((doc: firedoc) => (
          <div key={doc.id}>
            <p>{doc.tag}</p>
            <div
              className="img-wrap"
              onClick={() => setSelectedImg([doc.url, doc.id])}
            >
              <img src={doc.url} alt="imagecouldntbefound" />
            </div>
          </div>
        ))}
    </div>
  );
}
