import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import FourOFour from './pages/FourOFour';
import ContactMe from './pages/ContactMe';
import Success from './pages/Success';

// Component Test
// import EnterTheMatrix from './components/EnterTheMatrix';

// Layout
import Layout from './components/Layout';

// Catch-all near routes
function AliasRouter() {
  const { pathname } = useLocation();

  const redirectIf = (base, to) => {
    const re = new RegExp(`^/${base}[a-z0-9-]*$`, 'i');
    return re.test(pathname) ? <Navigate to={`/${to}`} replace /> : null;
  };

  return (
    redirectIf('about-me', 'about-me') ||
    redirectIf('contact-me', 'contact-me') ||
    redirectIf('email-sent', 'email-sent') ||
    <FourOFour />
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        {/* Test animation */}
        {/* <Route element={<EnterTheMatrix />} path='/enter-the-matrix' /> */}
        <Route element={<Layout />}>
          <Route element={<About />} path='/about-me' />
          <Route element={<ContactMe />} path='/contact-me' />
          <Route element={<Success />} path='/email-sent' />
        </Route>
        <Route element={<AliasRouter />} path='*' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;