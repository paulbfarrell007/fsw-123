//// 
//   console.log('hello')
  

import './App.css';
import { useEffect, useState } from 'react'; 
const apiKey = "rFOHLC1B46pPfSRGBzFIusBcEFE55NHk"
function App() {
  const [imgSrc, setImgSrc] = useState("");
  const [alt, setAlt] = useState("");
  const [inputValue, setInputValue] = useState("")
  
  const getImg=(queries)=>{

    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${queries}&limit=1`
      )
      .then((response) => response.json())
      .then(json => {
        setImgSrc (json.data[0].images.downsized_medium.url)
        setAlt (json.data.title)
      })  
  };    
  useEffect(() => {  
  getImg ("music")  
  }, []
  )
const handleChange = (e) => {
  setInputValue(e.target.value)
}
const handleSubmit = (e) => {
  getImg (inputValue)
}
  return (
     <div>
      <div>
        <input
        onChange={handleChange}
        value={inputValue}
        name="query"
        placeholder="text goes here"
        ></input> 
        <button
        onClick = {handleSubmit}
        >search</button>
      </div>
  <img src={imgSrc} alt={alt} />
    </div>
  );
}

export default App;
