import React from "react";
import useFirestore from "../hooks/useFirestore";

export default function GallerySection({ filterStatus, setSelectedImg }: any) {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc: any) => (
          <div key={doc.id}>
            <p>{doc.tag}</p>
            <div className="img-wrap" onClick={() => setSelectedImg(doc.url)}>
              <img src={doc.url} alt="imagecouldntbefound" />
            </div>
          </div>
        ))}
    </div>
  );
}
