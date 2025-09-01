import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import FourOFour from './pages/FourOFour';
import ContactMe from './pages/ContactMe';
import Success from './pages/Success';

// Layout to include header and footer in everything but the home page and 404 page
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Layout />}>
          <Route element={<About />} path='/about-me' />
          <Route element={<ContactMe />} path='/contact-me' />
          <Route element={<Success />} path="/email-sent"  />
        </Route>
        <Route element={<FourOFour />} path='/*' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;