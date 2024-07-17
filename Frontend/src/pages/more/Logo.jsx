import React from 'react';
import logo from '../../assets/logo.png';


function Logo() {
  return (
    <>
      <header className='home'>
        <a href="/">
          <img src={logo} />
        </a>
      </header>
      <main>
        <div className="page">
          <p style={{fontSize: '1.2em', lineHeight: '1.45', textWrap: 'balance'}}>
            This logo represents my relationship with coffee and how it is always on my desk all the time I be working, an evidence of diligence and hardwork, and the will of continuing a thing untill accomplishing it.
          </p>
        </div>
      </main>
    </>
  )
}

export default Logo