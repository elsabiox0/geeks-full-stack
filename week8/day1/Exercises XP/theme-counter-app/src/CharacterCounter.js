import React, { useRef, useState } from 'react';

const CharacterCounter = () => {
  const inputRef = useRef(null);
  const [charCount, setCharCount] = useState(0);

  const handleInput = () => {
    setCharCount(inputRef.current.value.length);
  };

  return (
    <div>
      <h2>Character Counter</h2>
      <input
        type="text"
        ref={inputRef}
        onInput={handleInput}
        placeholder="Type something..."
      />
      <p>Character Count: {charCount}</p>
    </div>
  );
};

export default CharacterCounter;
