//// api.giphy.com/v1/gifs/search?api_key=rFOHLC1B46pPfSRGBzFIusBcEFE55NHk&q=music&limit=1

import './App.css';

function App() {
  console.log('hello')
  
const url = "api.giphy.com/v1/gifs/search";
fetch(
  "https://api.giphy.com/v1/gifs/search"
  )
  .then(response => response.json( ))
  .then(json => console.log(response.json( ))
  return (
     <div> 
    </div>
  );
}

export default App;
