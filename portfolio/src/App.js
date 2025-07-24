import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { Footer } from './components/Footer/Footer';

import { Suspense, lazy } from 'react';

const Project = lazy(() => import('./components/Projects/Project'));
const Services = lazy(() => import('./components/Services/Services'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  return (
    <div className="app">
      <Navbar />

      <main aria-label="Main content">
        <Header />
        <About />

        <Suspense fallback={<div>Loading...</div>}>
          <Project />
          <Services />
          <Contact />
        </Suspense>
        
        <ScrollToTop />
      </main>

      <footer aria-label="Footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
