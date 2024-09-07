
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header'; 
import Main from './Components/Main/Main';



//https://66c06d30ba6f27ca9a569679.mockapi.io/emoji

function App() {
  
  const [emojiCard, setEmojiCard] = useState([]);
  const [searchEmoji, setSearchEmoji] = useState('');
  

  useEffect (() => {
    fetch("https://66c06d30ba6f27ca9a569679.mockapi.io/emoji").then(response => response.json()).then(emoji => setEmojiCard(emoji));

  }, []);

  useEffect (() => {
    fetch("https://66c06d30ba6f27ca9a569679.mockapi.io/emoji").then(response => response.json()).then(serch => setSearchEmoji(serch));

  }, []);

   

  return (
    <div className="App">
      <Header></Header>
      <Main 
      emoji = {emojiCard}
      search = {searchEmoji}></Main>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
