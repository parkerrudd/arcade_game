import react from 'react'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import './App.css';
import Login from './pages/Login';
import Gamepage from './pages/Gamepage';
import styles from './styles/styles.css'; 
import { ContextProvider } from './context';

function App() {
  return (
    <div className="App">
    <ContextProvider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Gamepage />} />
        </Routes>
      </Router>
    </ContextProvider>
    </div>
  );
}

export default App;
