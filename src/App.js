import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Salad from './components/Salad';
import Barnyard from './components/Barnyard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Nav/><Salad/></>} />
        <Route path='/barn' element={<><Nav/><Barnyard/></>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
