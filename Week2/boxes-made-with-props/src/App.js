import Card from "./Card.js"
import './App.css';

function App() {
  return (
    <div className="App">
      < Card 
      title="Title 1" 
      subtitle="Sub Title 1" 
      description="Hello World 1 !"
      bgcolor="#ED2938"
      width="200px"    
    />
     < Card 
      title="Title 2" 
      subtitle="Sub Title 2" 
      description="Hello World 2 !"
      bgcolor="#FEAE0D"
      width="200px"    
    />

    < Card 
      title="Title 3" 
      subtitle="Sub Title 3" 
      description="Hello World 3 !"
      bgcolor="#FEEE0D"
      width="200px"    
    />

< Card 
      title="Title 4" 
      subtitle="Sub Title 4" 
      description="Hello World 4 !"
      bgcolor="#0C8628"
      width="200px"    
    />
    </div>
    
  );
}

export default App;
