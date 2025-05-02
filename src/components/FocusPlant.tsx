import { useState, useEffect } from "react";

const FocusPlant = () => {
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
    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 space-y-4">
      <img
        src="/plant.gif" // Place your high-res plant GIF in `public/plant.gif`
        alt="Growing Plant"
        className="w-48 h-48 object-contain drop-shadow-lg"
      />
      <div className="text-4xl font-semibold text-white">{formatTime(seconds)}</div>
      <div className="flex gap-4">
        <button
          onClick={toggleTimer}
          className={`px-6 py-2 rounded-xl font-medium transition-all ${
            isRunning
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
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
    </div>
  );
};

export default FocusPlant;
