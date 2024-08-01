/* eslint-disable react/prop-types */
import Copy from "./Copy";
import { useState } from "react";

export default function Input({ Password }) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    if (Password) {
      navigator.clipboard.writeText(Password).then(
        () => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        },
        (err) => {
          console.error("Failed to copy password: ", err);
        }
      );
    }
  };

  return (
    <div className="relative mb-6">
      <input className="bg-darkGrey pl-8 py-4 pr-32 text-almostWhite text-3xl" placeholder="P4$5W0rD!" value={Password} readOnly aria-label="Generated password" />
      {copied && <div className="absolute right-16 top-1/2 -translate-y-1/2 text-neonGreen">Copied</div>}
      <div
        onClick={handleCopyClick}
        className="absolute right-8 top-1/2 -translate-y-1/2 fill-neonGreen hover:fill-almostWhite cursor-pointer transition-colors duration-300"
        aria-label="Copy password"
        role="button">
        <Copy />
      </div>
    </div>
  );
}
