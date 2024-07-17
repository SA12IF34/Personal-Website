import React from 'react';
import logo from '../../assets/logo.png';


function AncientProjects() {
  return (
    <>
      <header className='home'>
        <a href="/">
          <img src={logo} />
        </a>
      </header>
      <main>
        <div className="page ancient">
          <ul>
            <li>
              <a target='_blank' href="https://name.saifchan.online/">Social media application</a>
            </li>
            <li>
              <a target='_blank' href="https://scentchan.saifchan.online/">Perfumes ecommerce</a>
            </li>
            <li>
              <a target='_blank' href="https://agencysaif.vercel.app/">Web development agency website</a>
            </li>
            <li>
              <a target='_blank' href="https://fate-series.saifchan.online">Fate series page</a>
            </li>
            <li>
              <a target='_blank' href="https://rock-paper-scissors.saifchan.online">Online rock-paper-scissors</a>
            </li>
            <li>
              <a target='_blank' href="https://portfolio.landing-page.saifchan.online/">Landing-pages portfolio</a>
            </li>
            
          </ul>
        </div>
      </main>
    
    </>
  )
}

export default AncientProjects;