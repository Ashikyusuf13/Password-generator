import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState(6);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);
  const [password, setPassword] = useState("");

  const handleGeneratePassword = () => {
    let char = "";
    if (uppercase) {
      char += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
      char += "abcdefghijklmnopqrstuvwxyz";
    }
    if (number) {
      char += "0123456789";
    }
    if (symbol) {
      char += "!@#$%^&*()_+";
    }
    let generatedpassword = "";
    for (let i = 0; i < input; i++) {
      const random = Math.floor(Math.random() * char.length);
      generatedpassword += char[random];
    }
    setPassword(generatedpassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Text Copied");
  };
  return (
    <>
      <div className="pass-container">
        <h1>STRONG PASSWORD GENERATOR</h1>

        <div className="input">
          <label htmlFor="char">Password Length:</label>
          <input
            type="number"
            id="char"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="checkbox-grp">
          <input
            type="checkbox"
            id="uppercase"
            checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
          />
          <label htmlFor="uppercase">Uppercase</label>
        </div>

        <div className="checkbox-grp">
          <input
            type="checkbox"
            id="lowercase"
            checked={lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
          />
          <label htmlFor="lowercase">Lowercase</label>
        </div>

        <div className="checkbox-grp">
          <input
            type="checkbox"
            id="Numbers"
            checked={number}
            onChange={(e) => setNumber(e.target.checked)}
          />
          <label htmlFor="Numbers">Numbers</label>
        </div>

        <div className="checkbox-grp">
          <input
            type="checkbox"
            id="symbol"
            checked={symbol}
            onChange={(e) => setSymbol(e.target.checked)}
          />
          <label htmlFor="symbol">Symbol</label>
        </div>

        <button className="btn" onClick={handleGeneratePassword}>
          Generate Password
        </button>

        <div className="output">
          <input type="text" readOnly value={password} />
          <button className="btn" onClick={copyToClipboard}>
            Copy
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
