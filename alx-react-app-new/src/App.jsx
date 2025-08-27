import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="John Doe" age={25} bio="A React developer from Accra" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
