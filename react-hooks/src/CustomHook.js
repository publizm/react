import React, { useState, useEffect } from 'react';

function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  function upHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  }

  useEffect(() => {
    // ComponentDidMount
    window.addEventListener('keydown', downHandler); // e를 넘겨준다.
    window.addEventListener('keyup', upHandler); // e를 넘겨준다.
    return () => {
      // ComponentWillUnmount
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  return keyPressed;
}

export default function CustomHook() {
  const aPressed = useKeyPress('a');
  const bPressed = useKeyPress('b');
  return (
    <>
      <div>
        {aPressed && 'A is pressed'}
        {bPressed && 'B is pressed'}
      </div>
    </>
  );
}
