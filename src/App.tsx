import React, { useState } from "react";
import GallerySection from "./components/GallerySection";
import TopSection from "./components/TopSection";
import UploadSection from "./components/UploadSection";
import Modal from "./components/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [filterStatus, setFilterStatus] = useState("");

  return (
    <div className="App-wrapper">
      <TopSection />
      <UploadSection setFilterStatus={setFilterStatus} />
      <GallerySection
        setSelectedImg={setSelectedImg}
        filterStatus={filterStatus}
      />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
