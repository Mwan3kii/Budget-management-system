import './App.css';
import Register from './Authentication/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/signup' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
