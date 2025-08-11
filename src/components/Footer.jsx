// src/components/Footer.jsx

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'navy',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
        marginTop: '20px',
      }}
    >
      <p style={{ margin: 0 }}>
        &copy; {new Date().getFullYear()} My Favorite Cities. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
