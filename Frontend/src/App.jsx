import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Profession from './pages/Profession';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// The More Pages
import Logo from './pages/more/Logo';
import AncientProjects from './pages/more/AncientProjects';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profession' element={<Profession />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/more/Logo' element={<Logo />} />
        <Route path='/more/AncientProjects' element={<AncientProjects />} />
      </Routes>
    </>
  )
}

export default App;
