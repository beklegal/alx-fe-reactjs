export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#111827',
        color: 'white',
        textAlign: 'center',
        padding: '12px',
        borderRadius: '10px',
        marginTop: '12px'
      }}
    >
      <p style={{ margin: 0 }}>© {new Date().getFullYear()} My Cities App</p>
    </footer>
  );
}
