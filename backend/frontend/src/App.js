import react from 'react'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import './App.css';
import Login from './pages/Login';
import Gamepage from './pages/Gamepage';
import styles from './styles/styles.css'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Gamepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
