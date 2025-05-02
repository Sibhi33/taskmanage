import { useState, useEffect } from "react";

const FocusCatPage = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (totalSeconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center min-h-screen p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 space-y-4">
      <h1 className="text-4xl font-bold text-green-700 mb-8">Meet Your Focus Cat!</h1>

      <img
        src="https://cdn.dribbble.com/userupload/26051861/file/original-a5866d538b1f79e7125d8a3bf2cece96.gif" // Make sure cat.gif is placed in the `public/` folder
        alt="Focus Cat"
        className="w-48 h-48 object-contain drop-shadow-lg"
      />
      <div className="text-4xl font-semibold text-white">{formatTime(seconds)}</div>
      <div className="flex gap-4">
        <button
          onClick={toggleTimer}
          className={`px-6 py-2 rounded-xl font-medium transition-all ${
            isRunning
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white shadow-md`}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          onClick={resetTimer}
          className="px-6 py-2 rounded-xl font-medium bg-gray-700 hover:bg-gray-800 text-white shadow-md"
        >
          Reset
        </button>
      </div>
        <p className="text-xl text-yellow-400-800 mt-6">Stay focused and let this kitty guide you 🐾</p>
    </div>
  );
};

export default FocusCatPage;
