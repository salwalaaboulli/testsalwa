import React, { useState } from 'react';


const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p style={{ color: count > 0 ? 'blue' : 'red' }}>{count}</p>
      <button onClick={() => setCount(count - 1)} >-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Count;