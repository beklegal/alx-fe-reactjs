import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <UserProfile
        name="Alice Johnson"
        age="25"
        bio="Loves hiking, photography, and building web apps with React."
      />
      <Footer />
    </div>
  );
}

export default App;
