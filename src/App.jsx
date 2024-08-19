import { useState } from "react";
import Input from "./components/Input";
import Slider from "./components/Slider";
import Checkbox from "./components/Checkbox";
import Strength from "./components/Strength";
import Arrow from "./components/Arrow";

function App() {
  const [password, setPassword] = useState("");
  const [charLength, setCharLength] = useState(16);
  const [checkedItems, setCheckedItems] = useState({
    includeUppercase: false,
    includeLowercase: false,
    includeNumbers: false,
    includeSymbols: false,
  });
  const [buttonError, setButtonError] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  const handleCharLength = (length) => {
    setCharLength(length);
  };

  const checkedBoxes = Object.values(checkedItems).filter(Boolean).length;

  const genPassword = () => {
    if (checkedBoxes === 0) {
      setButtonError(true);
      setTimeout(() => {
        setButtonError(false);
      }, 2000);
      return;
    }

    let chars = [];
    if (checkedItems.includeUppercase) {
      chars.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if (checkedItems.includeLowercase) {
      chars.push(..."abcdefghijklmnopqrstuvwxyz");
    }
    if (checkedItems.includeNumbers) {
      chars.push(..."0123456789");
    }
    if (checkedItems.includeSymbols) {
      chars.push(..."!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~");
    }

    let generatedPassword = "";

    for (let index = 0; index < charLength; index++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <>
      <h1 className="text-grey text-2xl mb-8 text-center">Password Generator</h1>
      <Input password={password} />
      <div className="bg-darkGrey p-8 w-full">
        <Slider charLength={charLength} onChange={handleCharLength} />
        <Checkbox
          title="Include Uppercase Letters"
          name="includeUppercase"
          onChange={handleCheckboxChange}
          checked={checkedItems.includeUppercase}
        />
        <Checkbox
          title="Include Lowercase Letters"
          name="includeLowercase"
          onChange={handleCheckboxChange}
          checked={checkedItems.includeLowercase}
        />
        <Checkbox
          title="Include Numbers"
          name="includeNumbers"
          onChange={handleCheckboxChange}
          checked={checkedItems.includeNumbers}
        />
        <Checkbox
          title="Include Symbols"
          name="includeSymbols"
          onChange={handleCheckboxChange}
          checked={checkedItems.includeSymbols}
        />
        <Strength checkedBoxes={checkedBoxes} />
        <button
          onClick={genPassword}
          className={`group w-full h-16 uppercase text-lg flex items-center justify-center transition-all ${
            buttonError
              ? "bg-red text-white"
              : "bg-neonGreen hover:bg-transparent hover:border-2 hover:border-neonGreen hover:text-neonGreen"
          }`}>
          <span className="mr-6">{buttonError ? "Please select 1 inclusion" : "Generate"}</span>
          {!buttonError && <Arrow className="fill-darkGrey group-hover:fill-neonGreen" />}
        </button>
      </div>
    </>
  );
}

export default App;
