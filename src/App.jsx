import { useState } from "react";

export default function App() {
  const [level, setLevel] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedButtonImage, setSelectedButtonImage] = useState(1); 

  const images = [
    "src/img/md.jpg",
    "src/img/tee.jpeg"
  ];
  
  const buttonImagesOptions = [
    "src/img/tm.jpg",
    "src/img/ft.jpeg",
    "src/img/y.jpg"
  ];

  const increaseLevel = () => {
    setLevel((prevLevel) => {
      const increment = selectedButtonImage * 10;
      const newLevel = prevLevel + increment;
      if (newLevel >= 101) {
        setImageIndex(1);
        return 100; // Ensuring the level doesn't exceed 100
      }
      return newLevel;
    });
  };

  const resetLevel = () => {  
    setLevel(0);
    setImageIndex(0);
  };

  const imageSize = `${Math.max(level * 7, 45)}px`;

  // Styles
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: 'url("src/img/j.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#212121",
    margin: 0,
    fontFamily: "'Arial', sans-serif",
    color: "#333"
  };

  const cardStyle = {
    border: "2px solid #3498db",
    borderRadius: "15px",
    padding: "20px",
    width: "670px",
    height: "360px",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    backgroundColor: "white"
  };

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    objectFit: "contain",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "all 0.5s ease-in-out"
  };

  const buttonImageStyle = {
    width: "125px",
    height: "125px",
    cursor: "pointer",
    margin: "10px",
    borderRadius: "50%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px"
  };

  const buttonText = {
    fontSize: "16px",
    marginTop: "10px",
    cursor: "pointer",
    color: "#3498db",
    fontWeight: "bold",
    textTransform: "uppercase"
  };

  const handleImageSelection = (e) => {
    setSelectedButtonImage(Number(e.target.value));
  };

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "#2c3e50", fontSize: "36px", marginBottom: "20px" }}>Level {level}</h1>

        <div style={cardStyle}>
          <img src={images[imageIndex]} alt="animal" style={imageStyle} />
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
          <p style={{ fontSize: "20px", color: "white", marginRight: "20px"}}>Current Level: {level}</p>
          <button 
            onClick={resetLevel} 
            style={{ 
              fontSize: "16px", 
              cursor: "pointer", 
              backgroundColor: "#3498db", 
              color: "white", 
              border: "none", 
              borderRadius: "5px", 
              padding: "10px 20px", 
              transition: "background-color 0.3s ease" 
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#2980b9"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#3498db"}
          >
            Reset
          </button>
        </div>

        <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <label htmlFor="imageSelector" style={{ color: "white", marginRight: "10px", fontSize: "18px" }}>Select Food:</label>
          <select 
            id="imageSelector" 
            value={selectedButtonImage} 
            onChange={handleImageSelection}
            style={{ padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" }}
          >
            {Array.from({ length: 3 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
               Menu {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div style={buttonContainerStyle}>
          <div style={{ textAlign: "center" }}>
            <img
              src={buttonImagesOptions[selectedButtonImage - 1]}
              alt="button"
              style={buttonImageStyle}
              onClick={increaseLevel}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)")}
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)")}
            />
            <p onClick={increaseLevel} style={buttonText}>
              Food + {selectedButtonImage * 10}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
