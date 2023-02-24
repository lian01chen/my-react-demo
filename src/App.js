import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/home/index';
import About from './views/About';
import Pages from './views/Pages';
import Try from './views/try-redux/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pages />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/try' element={<Try />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
