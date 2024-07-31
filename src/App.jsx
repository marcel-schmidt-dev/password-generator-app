import Input from "./components/Input";
import Slider from "./components/Slider";
import Checkbox from "./components/Checkbox";
import Strength from "./components/Strength";
import Arrow from "./components/Arrow";
import { useState } from "react";

function App() {
  const [Password, setPassword] = useState("");
  const [Charlength, setCharlength] = useState(16);
  const [checkedItems, setCheckedItems] = useState({
    includeUppercase: false,
    includeLowercase: false,
    includeNumbers: false,
    includeSymbols: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  const handleCharlength = (length) => {
    setCharlength(length);
  };

  const checkedBoxes = Object.values(checkedItems).filter(Boolean).length;

  const genPassword = () => {
    let Chars = [];
    if (checkedItems.includeUppercase) {
      Chars.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if (checkedItems.includeLowercase) {
      Chars.push(..."abcdefghijklmnopqrstuvwxyz");
    }
    if (checkedItems.includeNumbers) {
      Chars.push(..."0123456789");
    }
    if (checkedItems.includeSymbols) {
      Chars.push(..."!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");
    }

    if (Chars.length === 0) {
      return;
    }

    let Password = "";

    for (let index = 0; index < Charlength; index++) {
      const randomIndex = Math.floor(Math.random() * Chars.length);
      Password += Chars[randomIndex];
    }

    setPassword(Password);
  };

  return (
    <>
      <h1 className="text-grey text-2xl mb-8 text-center">Password Generator</h1>
      <Input Password={Password} />
      <div className="bg-darkGrey p-8">
        <Slider Charlength={Charlength} onChange={handleCharlength} />
        <Checkbox title="Include Uppercase Letters" name="includeUppercase" onChange={handleCheckboxChange} checked={checkedItems.includeUppercase} />
        <Checkbox title="Include Lowercase Letters" name="includeLowercase" onChange={handleCheckboxChange} checked={checkedItems.includeLowercase} />
        <Checkbox title="Include Numbers" name="includeNumbers" onChange={handleCheckboxChange} checked={checkedItems.includeNumbers} />
        <Checkbox title="Include Symbols" name="includeSymbols" onChange={handleCheckboxChange} checked={checkedItems.includeSymbols} />
        <Strength checkedBoxes={checkedBoxes} />
        <button
          onClick={genPassword}
          className="group w-full h-16 bg-neonGreen uppercase text-lg flex items-center justify-center hover:bg-transparent hover:border-2 hover:border-neonGreen hover:text-neonGreen">
          <span className="mr-6">Generate</span> <Arrow className="fill-darkGreyk group-hover:fill-neonGreen" />
        </button>
      </div>
    </>
  );
}

export default App;
