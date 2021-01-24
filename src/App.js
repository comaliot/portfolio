import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container mx-auto pt-12 pb-8 px-4 h-screen flex flex-col justify-between">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
