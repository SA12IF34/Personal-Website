import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';

import MoreSide from '../components/MoreSide';

function Home() {

  const [morePos, setMorePos] = useState(false); // true: top | false: bottom

  function handleShowMore() {
    document.querySelector('.more-ele').classList.add('show');
    return;
  }

  var num = 0;
  useEffect(() => {
    if (num < 1) {
      var randInt = Math.round(Math.random());
      setMorePos(randInt === 1);
  
      num = 1;
    }
  }, [])

  return (
    <>
      <header className='home'>
        <a href="/">
          <img src={logo} />
        </a>
      </header>
      <main>
        <div className='home-page page'>
          <div className='intro-text'>
            <div>
              <h1>
              Hello, welcome to my website. I'm Saif, a web developer and software engineer.  
              </h1>
            </div>
          </div>
          <div className="seperator"></div>
          <div className="sections-container">
            <Link to={'/about'}>
              <div className='section'> 
                <h3>About</h3>
              </div>
            </Link>
            <Link to={'/profession'}>
              <div className='section'> 
                <h3>Profession</h3>
              </div>
            </Link>
            <Link to={'/skills'}>
              <div className='section'> 
                <h3>Skills</h3>
              </div>
            </Link>
            <Link to={'/portfolio'}>
              <div className='section'> 
                <h3>Portfolio</h3>
              </div>
            </Link>
            <Link to={'/contact'}>
              <div className='section'> 
                <h3>Contact</h3>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <button onClick={handleShowMore} className={`more-btn ${morePos ? 'top' : 'bottom'}`}>
        more..
      </button>

      <MoreSide morePos={morePos} />
    </>
  )
}

export default Home;