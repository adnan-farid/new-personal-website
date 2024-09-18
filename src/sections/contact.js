import React, { useState, useEffect } from 'react';
import Box from '@/components/box.js';

export default function Contact() {
  const [displayText, setDisplayText] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    setLoading(true);
    setProgress(0);
    let loadInterval;

    // Simulate loading progress
    loadInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(loadInterval);
          setLoading(false);
          setDisplayText(true);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 20);
  };

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact');
      const box = section.getBoundingClientRect();

      if (box.bottom < 0 || box.top > window.innerHeight) {
        setDisplayText(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const email = [
    'faridadnan810@gmail.com',
    'adnanfarid@ufl.edu',
  ]

  return (
    <section id='contact' className='pageSections'>
      <div className='headingButton'>
        <h1>print(Contacts[Adnan_Farid])</h1>
        <button onClick={handleClick} disabled={loading}>Run</button>
      </div>

      {loading ? (
        <div className='loadingBarContainer'>
          <div className='loadingBar'>
            <div
              className='loadingProgress'
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p>{progress}%</p>
        </div>
      ) : displayText ? (
        <>
          <div className='boxes'>
              <Box
                title='Emails'
                items={email}
              />
              <a href='https://www.linkedin.com/in/adnan-farid/' target="_blank">
                <img className='contact-image' src='/linkedin-logo.png'/>
              </a>
              <a href='https://github.com/adnan-farid' target='_blank'>
                <img className='contact-image' src='/github-logo.png'/>
              </a>
          </div>
          <div className='resume'>
            <a href='/Adnan_Farid_Resume_August2024.pdf' target='_blank'>Click me for Adnan's Resume</a>
          </div>
        </>
      ) : (
        <div className='subText'>
          <p>System Error: [No output] Click run for contact information and resume</p>
        </div>
      )}
    </section>
  )
}
