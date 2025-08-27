<<<<<<< HEAD
function Footer() {
  return (
    <footer>
      <p>© 2023 City Lovers</p>
=======
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
>>>>>>> 6726bfab91cf95c40bffd6652933589a695b6b1b
    </footer>
  );
}

export default Footer;
