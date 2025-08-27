import React from "react";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Evans" age="25" bio="A React enthusiast from Ghana." />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
