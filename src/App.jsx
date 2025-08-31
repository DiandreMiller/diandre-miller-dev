import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';

// Layout to include header and footer in everything but the home page
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Layout />}>
          <Route element={<About />} path='/about' />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;