import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.column}>
        <div style={styles.logoContainer}>
          <img
            src="logo.png"
            alt="Logo"
            style={styles.logo}
          />
        </div>
        <p style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
          eros vel ligula vestibulum cursus non at eros.
        </p>
      </div>
      <div style={styles.column}>
        <h3 style={styles.heading}>Plan du site</h3>
        <ul style={styles.list}>
          <li>
            <a href="#home" style={styles.link}>Accueil</a>
          </li>
          <li>
            <a href="#boucherie" style={styles.link}>Boucherie</a>
          </li>
          <li>
            <a href="#traiteur" style={styles.link}>Traiteur</a>
          </li>
          <li>
            <a href="#commande" style={styles.link}>Commande</a>
          </li>
        </ul>
      </div>
      <div style={styles.column}>
        <h3 style={styles.heading}>Contact</h3>
        <p style={styles.text}>Téléphone : +33 1 23 45 67 89</p>
        <p style={styles.text}>Adresse : 123 Rue des Gourmets, Paris</p>
        <p style={styles.text}>Email : contact@example.com</p>
        <div style={styles.socials}>
          <a href="https://facebook.com" style={styles.icon}>Facebook</a>
          <a href="https://twitter.com" style={styles.icon}>Twitter</a>
          <a href="https://instagram.com" style={styles.icon}>Instagram</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  column: {
    flex: 1,
    margin: '0 10px',
  },
  logoContainer: {
    marginBottom: '10px',
  },
  logo: {
    maxWidth: '100px',
  },
  heading: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.6',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    marginBottom: '5px',
    display: 'block',
  },
  socials: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  icon: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
  },
};

export default Footer;