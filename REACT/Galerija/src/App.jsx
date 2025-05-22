import { useState } from "react";
import "./App.css";

function App() {
  const images = ["./src/assets/1.jpg", "./src/assets/2.jpg", "./src/assets/3.jpg", "./src/assets/4.jpg", "./src/assets/5.jpg"];
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <>
      <div className="container">
        <div className="foto">
          <img src={currentImage} alt="Current" />
          <div
            className="left"
            onClick={() => setCurrentImage(images[images.indexOf(currentImage) - 1 < 0 ? images.length - 1 : images.indexOf(currentImage) - 1])}>
            <svg width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="20" cy="19.1667" rx="20" ry="19.1667" transform="matrix(-1 0 0 1 40.9851 0)" fill="#F4BF03" />
              <path
                d="M23.4851 12.75L17.2351 19L23.4851 25.25"
                stroke="#252525"
                stroke-opacity="0.8"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div
            className="right"
            onClick={() => setCurrentImage(images[images.indexOf(currentImage) + 1 > images.length - 1 ? 0 : images.indexOf(currentImage) + 1])}>
            <svg width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="20.015" cy="19.1667" rx="20" ry="19.1667" fill="#F4BF03" />
              <path
                d="M17.515 12.75L23.765 19L17.515 25.25"
                stroke="#252525"
                stroke-opacity="0.8"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="nav">
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                className={currentImage === image ? "current" : ""}
                alt={`Image ${index + 1}`}
                onClick={() => setCurrentImage(image)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
