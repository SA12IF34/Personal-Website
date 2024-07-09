import {useEffect} from 'react';


import SectionLayout from '../layout/SectionLayout';

function About() {


  useEffect(() => {
    document.querySelector('title').textContent = 'Saif Chan | About';
  }, [])

  return (
    <SectionLayout>
      <div className='about-page page'>
        <div className='about-content'>
          <p>
          I'm Saif Ayesh, a person who likes anime and mathematics. 
          And a professional who has skills in web devlopment, desktop development, web scraping, and data processing.
          </p>
          
          <div className='content-seperator'></div>
          
          <p>
            In 2022, I decided that I'm ready to work, and then worked on my website, but didn't get any work.
            So I learned more and practiced more, and learned about business, design, copywrite, social networks, 
            and built lots of projects throughout this time.
            <br />
            And now, my skills are honed, my portfolio is ready to showcase my work, my website is ready and representative, 
            my accounts on different platforms are ready, my github profile is organized, and I'm ready to <span style={{textDecoration: 'underline'}}>work and guarantee satisfying results</span>.
          </p>
          
          <div className='content-seperator'></div>
          
          <p>
            This website is meant to represent me and my work in the shape I like. In this website I talk about myself, 
            my profession and field, my hobbies, and anything else. Feel free to look around.  
          </p>
        </div>
      </div>
    </SectionLayout>
  )
}

export default About