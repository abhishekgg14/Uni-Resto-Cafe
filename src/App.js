import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Salad from './components/Salad';
import Barnyard from './components/Barnyard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HenHouse from './components/HenHouse';
import Sea from './components/Sea';
import Biriyani from './components/Biriyani';
import Fast from './components/Fast';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Nav/><Salad /></>} />
        <Route path='/barn' element={<><Nav/><Barnyard/></>} />
        <Route path='/hen' element={<><Nav/><HenHouse/></>} />
        <Route path='/sea' element={<><Nav/><Sea/></>} />
        <Route path='/biriyani' element={<><Nav/><Biriyani/></>} />
        <Route path='/fast' element={<><Nav/><Fast/></>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
