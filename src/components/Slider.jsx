/* eslint-disable react/prop-types */
import { useEffect } from "react";

export default function Slider({ onChange, charLength }) {
  useEffect(() => {
    document.documentElement.style.setProperty("--value", charLength);
  }, [charLength]);
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-4">
        <span className="text-lg text-almostWhite">Character Length</span>
        <span className="text-3xl text-neonGreen">{charLength}</span>
      </div>
      <input
        className="h-2 w-full"
        type="range"
        min="1"
        max="32"
        value={charLength}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
}
