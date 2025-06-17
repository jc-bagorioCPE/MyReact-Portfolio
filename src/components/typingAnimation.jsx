import { useEffect, useState } from "react";

const TypingAnimation = () => {
  const text = "Welcome to my website!";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 100); // typing speed (ms)
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="text-xl font-mono">
      {displayedText}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypingAnimation;
