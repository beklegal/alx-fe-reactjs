<<<<<<< HEAD
function MainContent() {
  return (
    <main>
      <p>I love to visit New York, Paris, and Tokyo.</p>
=======
// src/components/MainContent.jsx

import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main
      style={{
        backgroundColor: '#f4f4f4',
        padding: '20px',
        minHeight: '200px',
      }}
    >
      <h2 style={{ textAlign: 'center', color: 'darkgreen' }}>User Profiles</h2>
      <UserProfile
        name="John Doe"
        age={30}
        bio="A passionate traveler and food lover."
      />
      <UserProfile
        name="Jane Smith"
        age={25}
        bio="Enjoys hiking and photography during weekends."
      />
>>>>>>> 6726bfab91cf95c40bffd6652933589a695b6b1b
    </main>
  );
}

export default MainContent;
