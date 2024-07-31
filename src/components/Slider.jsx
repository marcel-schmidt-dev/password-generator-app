/* eslint-disable react/prop-types */
import { useEffect } from "react";

export default function Slider({ onChange, Charlength }) {
  useEffect(() => {
    document.documentElement.style.setProperty("--value", Charlength);
  }, [Charlength]);
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-4">
        <span className="text-lg text-almostWhite">Character Length</span>
        <span className="text-3xl text-neonGreen">{Charlength}</span>
      </div>
      <input
        className="h-2 w-full"
        type="range"
        min="1"
        max="32"
        value={Charlength}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
}
