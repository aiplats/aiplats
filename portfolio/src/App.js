import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { Footer } from './components/Footer/Footer';

const Project = lazy(() => import('./components/Projects/Project'));
const Services = lazy(() => import('./components/Services/Services'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  return (
    <BrowserRouter basename='/'>
      <Navbar />
      <ScrollToTop />

        {/* Non-lazy routes */}
        <Header />
        <About />
        <Contact />

        {/* Lazy-loaded routes wrapped in Suspense */}
              <Routes>
        <Route
          path="/Projects"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Project />
            </Suspense>
          }
        />
        <Route
          path="/Services"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Services />
            </Suspense>
          }
        />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
