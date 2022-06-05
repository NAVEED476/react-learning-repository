
import './App.css';
import {Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h1>hello dude this is for react router dom</h1>
      <Link to="/Invoice">Invoice</Link>
      <Link to="/Expenses">Expenses</Link>
    </div>
  );
}

export default App;
