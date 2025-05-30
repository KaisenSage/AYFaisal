import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Framing Stories";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] text-[#f3f4f6] flex flex-col items-center justify-center">
      <div className="mb-6 text-5xl font-mono font-extrabold text-[#FFFFFF] tracking-widest drop-shadow-md">
        {text}<span className="animate-blink ml-1">|</span>
      </div>

      <div className="relative w-[240px] h-[6px] bg-[#333] rounded-full overflow-hidden shadow-inner">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFFFFF] to-transparent w-[40%] h-full animate-loading-bar shadow-[0_0_15px_#FFFFFF]/70"></div>
      </div>

      <p className="mt-4 text-sm text-gray-400 tracking-wide italic">Loading visual experience...</p>
    </div>
  );
};
