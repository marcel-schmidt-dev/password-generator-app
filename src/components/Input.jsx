/* eslint-disable react/prop-types */
import Copy from "./Copy";

export default function Input({ Password }) {
  const handleCopyClick = () => {
    navigator.clipboard.writeText(Password).then(
      () => {
        alert("Password copied to clipboard!");
      },
      (err) => {
        console.error("Failed to copy password: ", err);
      }
    );
  };

  return (
    <div className="relative mb-6">
      <input className="bg-darkGrey pl-8 py-4 pr-16 text-almostWhite text-3xl" placeholder="P4$5W0rD!" value={Password} readOnly aria-label="Generated password" />
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
