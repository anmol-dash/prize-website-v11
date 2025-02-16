import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <img
        src={`${process.env.PUBLIC_URL}/waves.png`}
        alt="Waves"
        style={styles.waveImage}
      />
      <div style={styles.underwater}>
        <p style={styles.footerText}>
          Sponsors and Partners
        </p>
        <img
          src={`${process.env.PUBLIC_URL}/wharton-logo.png`}
          alt="Wharton Logo"
          style={styles.images}
        />
        <p style={styles.footerText}>
          © 2025 PCV PRIZE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    width: '100%',
  },
  waveImage: {
    width: '100%',
    display: 'block',
  },
  underwater: {
    backgroundColor: '#78c5d8',
    padding: '20px',
  },
  images: {
    width: '20%',
    display: 'block',
    margin: '0 auto 10px',
  },
  footerText: {
    margin: 0,
    fontSize: '1rem',
  },
};

export default Footer;