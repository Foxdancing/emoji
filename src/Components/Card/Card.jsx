import React from "react";
import "./card.css";

export default function Card({ emoji, searchEmoji }) {
  return (
    <div className="wrap">
      {emoji
      .filter(
        elem =>
          elem.keywords.includes(searchEmoji.trim()) || 
          elem.title.includes(searchEmoji.trim())
        )
        // .trim - метод, который убирает пробелы

      .map((elem, index) => (
        <div className="card" key={index}>
          <p className="symbol">{elem.symbol}</p>
          <h3>{elem.title}</h3>
          <p className="keywords">{elem.keywords}</p>
        </div>
      ))}
    </div>
  );
}
