import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick} className="bg-black text-white">
        点击
      </button>
      <p>次數: {count}</p>
    </>
  );
}
