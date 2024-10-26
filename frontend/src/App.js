import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import HomePage from './Homepage/HomePage';
import CategoryPage from './Homepage/CategoryPage';
import CategoryDetails from './Homepage/CategoryDetails';
import Logout from './Authentication/Logout';
import LandingPage from './Splashscreen/LandingPage';
import About from './Splashscreen/About';
import ProtectedRoute from './Authentication/ProtectedRoute';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/home' element={<HomePage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path='/home/:id' element={<CategoryDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
