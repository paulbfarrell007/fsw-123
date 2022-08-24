import List from './List';
import {todos} from './Store';
import './App.css';

function App() {
  return (
    <div>
    <h1>List of Todos</h1>
    <h3><ul><List tasks = {todos} /></ul></h3>
    </div>);}
export default App;