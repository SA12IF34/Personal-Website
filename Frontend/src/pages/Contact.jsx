import {useEffect} from 'react';

import SectionLayout from '../layout/SectionLayout';

function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_CONTACT_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      window.location.reload();
    } else {
      alert("fail")
      console.log("Error", data);
    }
  };

  useEffect(() => {
    document.querySelector('title').textContent = 'Saif Chan | Contact';
  }, [])


  return (
    <SectionLayout>
      <div className='contact-page page'>
        <div className="contact-content">
          <div>
            <h2>You can find me on</h2>
            <br />
            <ul>
              <li>
                <a href="https://github.com/SA12IF34">
                Github
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/saifchan/">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.upwork.com/freelancers/~01ef34f2c2b3e1bcb1?mp_source=share">Upwork</a>
              </li>
              <li>
                <a href="https://medium.com/@saifchan">Medium</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h2>You can contact me over</h2>
            <br />
            <span>Whats app: +962796483509</span>
            <span>Email: saifchan@mail.com</span>
          </div>

          <div>
            <h2>Say hello</h2>
            <br />
            <form onSubmit={onSubmit}>
              {/* <input type="hidden" name="access_key" value="fda6e8a8-f775-4b66-94e3-257654a20115" />
              <input type="hidden" name="redirect" value="http://127.0.0.1:9000/" /> */}
              <div className='FullW'>
                <input type="text" name="name" id="name" required placeholder='Your Name' />
                <input type="email" name="email" id="email" required placeholder='Your Email' />
              </div>
              <div className='FullW'>
                <input type="text" name="subject" id="subject" required placeholder='Subject' />
              </div>
              <textarea className='FullW' name="message" required cols="30" rows="10" placeholder='Message..'></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}

export default Contact;