import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
  const [emojiCard, setEmojiCard] = useState([]);
  const [searchEmoji, setSearchEmoji] = useState("");

  useEffect(() => {
    fetch("https://66c06d30ba6f27ca9a569679.mockapi.io/emoji")
      .then((response) => response.json())
      .then((emoji) => setEmojiCard(emoji));
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Main 
      emoji={emojiCard}
      searchEmoji ={searchEmoji}
      setSearchEmoji={setSearchEmoji}></Main>

      <Footer></Footer>
    </div>
  );
}

export default App;
