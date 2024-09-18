import TypedText from '@/components/typedText.js';
import React, { useState, useEffect } from 'react';
import Box from '@/components/box.js';

export default function About () {
  const [displayText, setDisplayText] = useState(false);

  const handleClick = () => {
    setDisplayText(true);
  }
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
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

  const languages=[
    'Python',
    'C++',
    'JavaScript',
    'Java',
    'HTML/CSS',
  ];

  const libraries=[
    'MongoDB',
    'ExpressJS',
    'React',
    'NodeJS',
    'Django',
    'MySQL',
    'ReactNative',
    'NextJS',
  ]
  const tools=[
    'Git',
    'Trello',
    'AWS S3',
    'AWS Pinpoint',
    'AWS Lambda',
  ]
  const introduction=[
    "I'm Adnan, a third-year Computer Science student @ the University of Florida pursuing a BS/MS. I enjoy training in Martial Arts, and playing video games with my twin brother.",
  ]

  return (
    <section id='about' className='pageSections'>
      <div className='content'>
        <div className='headingButton'>
          <h1>print(Information["Adnan_Farid"])</h1>
          <button onClick={handleClick}> Run </button>
        </div>
        {displayText ? (
          <>
            <div className='subText'>
                <TypedText
                strings={introduction}
                typeSpeed={20}
                backSpeed={50}
                loop={false}
                />
              </div>
              <div className='boxes'>
                <Box
                  title='languages'
                  items={languages}
                />
                <Box
                  title='libraries'
                  items={libraries}
                />
                <Box
                  title='tools'
                  items={tools}
                />
              <img className='image' src='/IMG_1374.PNG'/>
            </div>
          </>
        ) : (
          <div className='subText'>
            <p>System Error: [No output] Click run to learn about ['Adnan_Farid']</p>
          </div>
        )}

        </div>
    </section>
  )
}

