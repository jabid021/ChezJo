import React from "react";
import Atout from "./atout";

const Atouts = () => {
  const atouts = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/1892/1892654.png",
      text: "Qualité exceptionnelle de nos produits.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5470/5470304.png",
      text: "Service rapide et personnalisé.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/8711/8711945.png",
      text: "Une expertise reconnue depuis 20 ans.",
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Nos Atouts</h2>
      <div style={styles.grid}>
        {atouts.map((atout, index) => (
          <Atout key={index} image={atout.image} text={atout.text} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#fbe9e7",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "100%",
    margin: "auto",
  },
  heading: {
    textAlign: "center",
    color: "#b71c1c",
    marginBottom: "20px",
    fontSize: "24px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
};

export default Atouts;
