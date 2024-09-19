import React from "react";
import "./main.css";
import Card from "../Card/Card";

export default function Main({ emoji, searchEmoji, setSearchEmoji }) {
  return (
    <div className="main">
      <div className="field">
        <input
          onChange={event => setSearchEmoji(event.target.value)}
          type="text"
          value={searchEmoji}
        />

        <button onClick={()=> setSearchEmoji('') }>X</button>
      </div>

      <Card emoji={emoji} searchEmoji={searchEmoji}></Card>
    </div>
  );
}
