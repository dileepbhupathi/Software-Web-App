import './App.css';
import { Footer } from './components/Footer/Footer';
import { Body } from './components/MainBody/Body';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
