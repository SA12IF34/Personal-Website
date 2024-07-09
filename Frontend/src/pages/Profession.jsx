import {useState, useEffect} from 'react';

import SectionLayout from '../layout/SectionLayout';

function Profession() {

  const [n, setN] = useState(0);
  
  function handleCalculateReadTime() {
    let ps = document.querySelectorAll('p');
    let lis = document.querySelectorAll('li');

    var text = '';

    ps.forEach(p => {
      text += p.textContent;
    })
    lis.forEach(li => {
      text += li.textContent;
    })

    var numOfSec = text.replace(' ', '').length / 10;
    var mins = Math.round(numOfSec / 60);

    setN(mins);

  }

  useEffect(() => {
    document.querySelector('title').textContent = 'Saif Chan | Profession';

    handleCalculateReadTime();

  }, [])
  
  return (
    <SectionLayout>
      <div className='profession-page page'>
        <span className='read-time'>
            {n} mins read
        </span>
        <div className='profession-content'>
          <p>
          Mainly, I'm a fullStack web developer and have 3.5 years of experience using my skills and tools. I can proide web related services and applications.
          </p>
          <p>
          My work domain includes developing web UIs, client side interactions with server, developing the backend, designing databases, developing APIs, deploying web apps, developing and deploying web extensions, maintaining and improving web apps.
          </p>
          <p>
            My skills and experience enables me helping you in:
          </p>
          <ul>
            <li>improving website performance</li>
            <li>deploying web apps</li>
            <li>fixing bugs</li>
            <li>applying security best practices</li>
            <li>writing tests and testing web apps</li>
            <li>customizing interaction between server and client side</li>
          </ul>

          <div className='content-seperator'></div>
  
          <h2>Other Experiences</h2>
          <p>
          Also, I have some experience building web scraping projects, writing scripts for various tasks, developing GUIs and desktop apps, and using automation and scripting tools.
          </p>
          <p>
            I'm also a python developer in which I can utilize and employ it's real power in building all kinds of projects.
          </p>

          <div className="content-seperator"></div>

          <p style={{padding: 0}}>To get in touch, please visit <a style={{color: 'black'}} href="/contact">contact page</a> and I would be happy to work with you.</p>
          
        </div>
      </div>
    </SectionLayout>
  )
}

export default Profession