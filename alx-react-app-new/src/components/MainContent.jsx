export default function MainContent() {
  const wrapperStyle = {
    padding: '16px',
    backgroundColor: '#eef2ff',
    borderRadius: '10px',
    margin: '12px 0'
  };

  const listStyle = {
    listStyleType: 'square',
    paddingLeft: '20px',
    margin: 0
  };

  const itemStyle = { margin: '6px 0', fontWeight: 500 };

  return (
    <main style={wrapperStyle}>
      <h2 style={{ marginTop: 0, color: '#1f2937' }}>Top Cities</h2>
      <ul style={listStyle}>
        <li style={itemStyle}>Accra</li>
        <li style={itemStyle}>Nairobi</li>
        <li style={itemStyle}>Cape Town</li>
        <li style={itemStyle}>Lagos</li>
      </ul>
    </main>
  );
}
