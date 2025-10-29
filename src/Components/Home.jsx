import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const Home = () => {
  const [input, setInput] = useState(6);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [number, setNumber] = useState(false);
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
    toast.success("Password Copied to Clipboard!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-6">
        <h1 className="text-xl font-bold text-center text-white">
          STRONG PASSWORD GENERATOR
        </h1>

        <div className="flex flex-col w-full gap-3">
          <label htmlFor="char" className="text-gray-200">
            Password Length:
          </label>
          <input
            placeholder="Enter the password length"
            className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            id="char"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <input
              className="w-4 h-4 accent-blue-500 cursor-pointer"
              type="checkbox"
              id="uppercase"
              checked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
            />
            <label
              htmlFor="uppercase"
              className="text-gray-200 cursor-pointer hover:text-blue-400"
            >
              Uppercase
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              className="w-4 h-4 accent-blue-500 cursor-pointer"
              type="checkbox"
              id="Lowercase"
              checked={lowercase}
              onChange={(e) => setLowercase(e.target.checked)}
            />
            <label
              htmlFor="Lowercase"
              className="text-gray-200 cursor-pointer hover:text-blue-400"
            >
              Lowercase
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              className="w-4 h-4 accent-blue-500 cursor-pointer"
              type="checkbox"
              id="Numbers"
              checked={number}
              onChange={(e) => setNumber(e.target.checked)}
            />
            <label
              htmlFor="Numbers"
              className="text-gray-200 cursor-pointer hover:text-blue-400"
            >
              Numbers
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              className="w-4 h-4 accent-blue-500 cursor-pointer"
              type="checkbox"
              id="Symbol"
              checked={symbol}
              onChange={(e) => setSymbol(e.target.checked)}
            />
            <label
              htmlFor="Symbol"
              className="text-gray-200 cursor-pointer hover:text-blue-400"
            >
              Symbol
            </label>
          </div>
        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors duration-200 font-medium"
          onClick={handleGeneratePassword}
        >
          Generate Password
        </button>

        {password && (
          <div className="flex gap-3 px-4 py-2 bg-gray-800/30 rounded-lg">
            <input
              type="text"
              readOnly
              value={password}
              className="w-full bg-transparent text-gray-100 outline-none"
            />
            <button
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
              onClick={copyToClipboard}
            >
              Copy
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
