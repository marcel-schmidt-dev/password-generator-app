/* eslint-disable react/prop-types */
export default function Strength({ checkedBoxes }) {
  const getText = () => {
    if (checkedBoxes < 2) {
      return "Too Weak!!!";
    } else if (checkedBoxes === 2) {
      return "Weak";
    } else if (checkedBoxes === 3) {
      return "Medium";
    } else if (checkedBoxes === 4) {
      return "Strong";
    }
  };

  const getClasses = () => {
    if (checkedBoxes < 2) {
      return "border-red bg-red";
    } else if (checkedBoxes === 2) {
      return "border-orange bg-orange";
    } else if (checkedBoxes === 3) {
      return "border-yellow bg-yellow";
    } else if (checkedBoxes === 4) {
      return "border-neonGreen bg-neonGreen";
    }
  };

  let colorClass = getClasses();

  return (
    <div className="bg-veryDarkGrey px-4 md:px-8 py-5 flex justify-between items-center mb-8">
      <span className="uppercase text-grey text-base md:text-lg">Strength</span>
      <div className="flex gap-2 items-center">
        <span className="uppercase text-almostWhite text-base md:text-2xl mr-2 md:mr-4">
          {getText()}
        </span>
        <div
          className={`w-[10px] h-7 border-2 ${
            checkedBoxes >= 0 ? colorClass : "border-almostWhite"
          }`}></div>
        <div
          className={`w-[10px] h-7 border-2 ${
            checkedBoxes > 1 ? colorClass : "border-almostWhite"
          }`}></div>
        <div
          className={`w-[10px] h-7 border-2 ${
            checkedBoxes > 2 ? colorClass : "border-almostWhite"
          }`}></div>
        <div
          className={`w-[10px] h-7 border-2 ${
            checkedBoxes > 3 ? colorClass : "border-almostWhite"
          }`}></div>
      </div>
    </div>
  );
}
