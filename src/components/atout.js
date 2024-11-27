import React from 'react';

const Atout = ({ image, text }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt="Atout" style={styles.image} />
      <p style={styles.text}>{text}</p>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '10px',
    margin: '10px',
    backgroundColor: '#f7f7f7',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '200px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '6px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '14px',
    color: '#333',
  },
};

export default Atout;
