import React from "react";
import GallerySection from "./components/GallerySection";
import TopSection from "./components/TopSection";
import UploadSection from "./components/UploadSection";

function App() {
  return (
    <div className="App-wrapper">
      <TopSection />
      <UploadSection />
      <GallerySection />
    </div>
  );
}

export default App;
