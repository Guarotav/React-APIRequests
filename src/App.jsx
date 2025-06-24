import React, {useState, useEffect, useSyncExternalStore} from "react";
import axios from "axios"
import { createRoot } from "react-dom/client";
// import axios from "axios"; // Maybe we'll need axios? 🤔
import "./style.css";
import SearchField from "./SearchField"
import GifCard from "./GifCard"



const GIPHY_API_KEY = `M5DpTGZFf9Mz3pKladW8ZWy50KnUi4d8`;

// const GIPHY_API_KEY = "YOUR_API_KEY";

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [input, setInput] = useState("");
  
  //Tries to fetch the data
  
  const fetchGifs = async (searchTerm) =>{
    const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${GIPHY_API_KEY}`;
    const gifsResponse = await axios.get(url);
    const gifsData = gifsResponse.data;
    const giphyData = gifsData.data;

    console.log(giphyData);
    setGifs(giphyData);}
  
  //useEffect to make sure that it does not go infinitley through that function
  useEffect(() => {
    fetchGifs();
  }, []);

  

  const handleSearch = async (searchTerm) => {
    setInput(searchTerm);
    fetchGifs(searchTerm);
  }

  
  return (
    <div className="app">
      <h1 className="title">Let's look for some Gifs!</h1>
      <SearchField input={input} setInput={setInput} onSearch={handleSearch} />

      {/* <SearchField onSearch={handleSearch} /> */}
      <div className="gif-grid">
        {gifs.map((gif) => (
          <GifCard key={gif.id} gif={gif} />
        ))}
      </div>

      
    </div>
  );
};

// The following lines initialize your React application and inject
// it into the index.html
const root = createRoot(document.getElementById("root"));
root.render(<App />);
