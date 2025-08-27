import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '16px' }}>
      <Header />

      {/* Example User */}
      <UserProfile
        name='Jane Doe'
        age={28}
        bio='A travel enthusiast who loves discovering new cities, cultures, and cuisines.'
      />

      <MainContent />
      <Footer />
    </div>
  );
}
