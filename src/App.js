import React, { useState } from "react";
import "./styles.css";

function App() {
  const [value, setValue] = useState("");

  function displayName(event) {
    const clickedValue = event.target.value;
    setValue((prevValue) => prevValue + clickedValue);
  }

  function handleEvaluate() {
    try {
      // Using Function constructor as an alternative to eval
      const result = new Function(`return ${value}`)();
      setValue(String(result));
    } catch (error) {
      setValue("Error");
    }
  }

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={() => setValue("")} />
            <input
              type="button"
              value="DE"
              onClick={() => setValue(value.slice(0, -1))}
            />
            <input type="button" value="." onClick={displayName} />
            <input type="button" value="/" onClick={displayName} />
          </div>
          <div>
            <input type="button" value="7" onClick={displayName} />
            <input type="button" value="8" onClick={displayName} />
            <input type="button" value="9" onClick={displayName} />
            <input type="button" value="*" onClick={displayName} />
          </div>
          <div>
            <input type="button" value="4" onClick={displayName} />
            <input type="button" value="5" onClick={displayName} />
            <input type="button" value="6" onClick={displayName} />
            <input type="button" value="+" onClick={displayName} />
          </div>
          <div>
            <input type="button" value="1" onClick={displayName} />
            <input type="button" value="2" onClick={displayName} />
            <input type="button" value="3" onClick={displayName} />
            <input type="button" value="-" onClick={displayName} />
          </div>
          <div>
            <input type="button" value="00" onClick={displayName} />
            <input type="button" value="0" onClick={displayName} />
            <input
              type="button"
              value="="
              className="equal"
              onClick={handleEvaluate}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
