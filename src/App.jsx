import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import FourOFour from './pages/FourOFour';
import ContactMe from './pages/ContactMe';
import Success from './pages/Success';

//ToDo:
// Continue enter the matrix

// Component Test
// import EnterTheMatrix from './components/EnterTheMatrix';

// Layout
import Layout from './components/Layout';
// import { label } from 'framer-motion/client';

// Catch-all near routes
function AliasRouter() {
  const { pathname } = useLocation();

  const redirectIf = (base, to) => {
    const re = new RegExp(`^/${base}[a-z0-9-]*$`, 'i');
    return re.test(pathname) ? <Navigate to={`/${to}`} replace /> : null;
  };

  const hardRedirect = 
    redirectIf('about-me', 'about-me') ||
    redirectIf('contact-me', 'contact-me') ||
    redirectIf('email-sent', 'email-sent');

    if(hardRedirect) {
      return hardRedirect;
    }

    if (/^\/product[a-z0-9-]*$/i.test(pathname)) {
      return <Navigate to="/" replace />;
    };

  const routeChoices = [
    {path: '/about-me', label: 'About Me'},
    {path: '/contact-me' , label: 'Contact Me' },
    {path: '/email-sent', label: 'Email Sent' },
  ]

  const fuse = new Fuse(routeChoices, {
    keys: ['path', 'label'],
    threshold: 0.35,
    ignoreLocation: true,
    includeScore: true,
  });

  const query = pathname.toLowerCase();
  const result = fuse.search(query)[0]; // best match

  console.log('result:', result);

  if(result && result.score != null && result.score < 0.20) {
    return <Navigate to={result.item.path} replace />;
  }

  return <FourOFour />
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
};

export default App;