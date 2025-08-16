import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { Footer } from './components/Footer/Footer';

const Project = lazy(() => import('./components/Projects/Project'));
const Services = lazy(() => import('./components/Services/Services'));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Header />} />

        {/* Lazy-loaded pages */}
        <Route
          path="/About"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          }
        />
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
        <Route
          path="/Contact"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </Suspense>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
