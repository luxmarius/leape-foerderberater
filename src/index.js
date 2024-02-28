import React from 'react';
import ReactDOM from "react-dom";
import './styles.css';
import NavigationBar from './components/NavigationBar'; // Adjust path as necessary
import MainContent from './components/MainContent'; // Adjust path as necessary
import Footer from './components/Footer'; // Adjust path as necessary

function App() {
  return (
    <>
      <div>
        <NavigationBar />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
