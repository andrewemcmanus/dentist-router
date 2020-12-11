import { BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Procedures from './components/Procedures';
// Route: assign the URLs
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/procedures" component={Procedures} />
        <Route path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
