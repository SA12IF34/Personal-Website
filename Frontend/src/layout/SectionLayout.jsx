import {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {FaArrowLeftLong} from 'react-icons/fa6';
import logo from '../assets/logo.png';

function SectionLayout({children}) {

const location = useLocation()

  useEffect(() => {
    var pathname = location.pathname.replace('/', '').replace('/', '');
    console.log(pathname)
    var link = document.querySelector(`a[href='/${pathname}']`);
    link.style.cssText = 'text-decoration: underline;';
  }, [])

  return (
    <>
        <header className='section'>
            <a href="/">
                <img src={logo} alt='home page' />
            </a>

            <nav>
                <Link to={'/about'}>About</Link>
                <Link to={'/profession'}>Profession</Link>
                <Link to={'/skills'}>Skills</Link>
                <Link to={'/portfolio'}>Portfolio</Link>
                <Link to={'/contact'}>Contact</Link>
            </nav>

            <button onClick={() => {
                window.history.go(-1);
            }} className='back-btn'>
                <FaArrowLeftLong />
            </button>

        </header>
        <main>
            {children}
        </main>
    </>
  )
}

export default SectionLayout;