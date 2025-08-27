/* Displays a single user's profile with inline styles */
export default function UserProfile({ name, age, bio }) {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '14px',
        margin: '12px 0',
        borderRadius: '8px',
        backgroundColor: '#f9fafb',
        boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
      }}
    >
      <h2 style={{ color: 'blue', margin: '0 0 8px 0', fontSize: '1.4rem' }}>
        {name}
      </h2>

      <p style={{ margin: '6px 0', fontSize: '0.95rem' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{age}</span>
      </p>

      <p style={{ margin: '6px 0', lineHeight: 1.5, color: '#333' }}>
        Bio: {bio}
      </p>
    </div>
  );
}
