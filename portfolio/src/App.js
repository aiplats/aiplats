import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Project } from './components/Projects/Project';
import { Contact } from './components/Contact/Contact';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Project />
      <Contact />
      <ScrollToTop />
    </>
  );
}

export default App;
