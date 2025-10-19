import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { Footer } from './components/Footer/Footer';
import InstallPWA from './components/InstallPWA/InstallPWA';

const About = lazy(() => import('./components/About/About'));
const Project = lazy(() => import('./components/Projects/Project'));
const Services = lazy(() => import('./components/Services/Services'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Header />} />

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

      <InstallPWA />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
