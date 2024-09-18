
import React, { useEffect, useRef } from 'react';
import { Typed, typed } from 'react-typed';

const TypedText = ({ strings, typeSpeed = 200, backSpeed = 200, loop = false }) => {
  const typedRef = useRef(null); 

  useEffect(() => {
    if (typedRef.current) {
      new Typed(typedRef.current, {
        strings,
        typeSpeed,
        backSpeed,
        loop,
        showCursor: false,
      });
    }
  }, [strings, typeSpeed, backSpeed, loop]);

  return <span ref={typedRef}></span>;
};

export default TypedText;