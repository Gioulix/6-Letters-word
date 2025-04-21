import React, { useState, useEffect } from "react";
import "./index.css";

function Word() {
  const [word, setWord] = useState([]);
  const [submittedWords, setSubmittedWords] = useState([]);
  const [randomWord, setRandomWord] = useState([]);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3010/six_leters")
      .then((response) => response.json())
      .then((data) => setRandomWord(data.word))
      .catch((error) => console.error("Error fetching random word:", error));
  }, []);

  function handleChange(event) {
    setWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (word.length !== 6) {
      alert("Please enter a 6-letter word.");
      return;
    }
    if (submittedWords.length < 5) {
      setSubmittedWords([...submittedWords, word]);

      if (word === randomWord) {
        setMessage("true");
      } else {
        setMessage("false");
      }

      setWord("");
    } else {
      alert("No more attempts left!");
    }
  }

  return (
    <div className="word-form">
      <h1>Six Letter Words</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={word}
          onChange={handleChange}
          placeholder="Enter a 6-letter word"
        />
        <button className="word-guess" type="submit">
          Submit
        </button>
      </form>
      <div className="submitted-words">
        {submittedWords.map((submittedWord, wordIndex) => (
          // Check if the submitted word is correct
          // and display the letters in the correct boxes
          <div key={wordIndex} className="letter-boxes">
            {submittedWord.split("").map((letter, letterIndex) => {
              const isCorrect = randomWord[letterIndex] === letter;
              return (
                <div
                  key={letterIndex}
                  className={`letter-box ${isCorrect ? "correct" : ""}`}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="message">
        {message === "true" && <p>You guessed the word!</p> &&
          alert("Good Job!")}
        {message === "false" && <p>Try again!</p>}
        {submittedWords.length >= 5 && message === "false" && (
          <p>You lose the game!</p>
        )}
      </div>
    </div>
  );
}
export default Word;
