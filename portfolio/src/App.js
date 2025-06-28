import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Project } from './components/Projects/Project';
import { Skills } from './components/Skills/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Project />
    </>
  );
}

export default App;
