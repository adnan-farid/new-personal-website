import React, { useState, useEffect, useRef } from 'react';
import Box from '@/components/box.js';
import { RotatingLines } from 'react-loader-spinner';

export default function Projects() {
  const [displayText, setDisplayText] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef(null);
  const sectionRef = useRef(null);

  const handleClick = () => {
    setIsLoading(true);
    // Simulate loading delay
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
      setDisplayText(true);
    }, 1500); // 1.5 seconds delay
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
        } else {
          setDisplayText(false);
          setIsLoading(false);
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
        }
      },
      {
        root: null, 
        threshold: 0.1, 
      }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  const PDFGPT = [
    'Full Stack Web app utilizing MERN stack and ChatGPT API.',
    'Allows a user to upload a PDF and chat with an AI about it',
  ];
  const Snake = [
    'Made a snake game clone in Python utilizing PyGame',
    'Trained a deep Q-learning agent to beat the game with high accuracy, using PyTorch',
  ];
  const customLang = [
    'Created a custom language in Java by implementing a Lexer, Parser, Interpreter, Analyzer, and Generator',
    'Customized the language using Context-Free Grammar',
  ];

  return (
    <section id='projects' className='pageSections' ref={sectionRef}>
      <div className='headingButton'>
        <h1>[print(project) for project in projects]</h1>
        <button onClick={handleClick}>Run</button>
      </div>
      {isLoading ? (
        <div className='boxes'>
          <RotatingLines strokeColor='#005f9e' />
        </div>
      ) : displayText ? (
        <>
          <div className='boxes'>
            <Box title='PDFGPT' items={PDFGPT} />
            <Box title='Snake AI Champion' items={Snake} />
            <Box title='Custom Programming Language' items={customLang} />
          </div>
          <div>
            <h1 className='headingButton'>What am I working on right now?</h1>
            <p className='subText'>
              I'm currently brainstorming some project ideas that involve ML/AI.
            </p>
          </div>
        </>
      ) : (
        <p className='subText'>System Error: [No output] Click run for projects</p>
      )}
    </section>
  );
}
