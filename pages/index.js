import React, { useState } from "react";

const Index = () => {
  const [text, setText] = useState("internationalization Marc Andreessen");
  const numerize = (word) => {
    if (word.length <= 2) {
      return word;
    }
    return word[0] + (word.length - 2) + word[word.length - 1];
  };
  const numerized = text
    .split(" ")
    .map((word) => numerize(word))
    .join(" ");
  return (
    <div>
      <h1>numeronym</h1>
      <p className="description">
        Turn your text into numeronyms (e.g. internalization becomes i18n, since
        there are 18 letters in the word between i and n).
      </p>
      <label htmlFor="input">Input:</label>
      <textarea id="input" onChange={(e) => setText(e.target.value)}>
        {text}
      </textarea>
      <p className="label">Output:</p>
      <p className="result">{numerized}</p>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        div {
          width: 90%;
          margin: 2rem auto;
          max-width: 800px;
          font-family: system-ui;
        }
        .description {
          margin: 1rem 0;
          font: normal 1.1rem/1.4 system-ui;
          color: #444;
        }
        textarea {
          width: 100%;
          height: 20rem;
          margin: 0.5rem 0 1rem;
          padding: 1.25rem;
          border-radius: 7.5px;
          border: none;
          background: #efefef;
        }
        textarea,
        .result {
          font: normal 1.15rem/1.5 Georgia, serif;
          color: #222;
        }
        .result {
          margin-top: 0.5rem;
        }
        label,
        .label {
          text-transform: uppercase;
          font: bold 1rem/1 system-ui;
          color: #333;
          margin-top: 2rem;
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Index;
