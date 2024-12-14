import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 PCV PRIZE. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '10px 0',
    backgroundColor: '#f1f1f1',
  },
};

export default Footer;