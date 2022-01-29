import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

import Landing from './components/Landing';

import Navbar from './components/Navbar';
import Pregister from './components/Pregister';
import Plogin from './components/Plogin';
import Dreg from './components/Dreg';
import Dlog from './components/Dlog';

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          {/* <Route path='/plogin' element={<Plogin/>}/> */}
          <Route path='/pregister' element={<Pregister/>}/>
          <Route path='/dregister' element={<Dreg/>}/>
          <Route path='/dlogin' element={<Dlog/>}/>
          {/* <Route path='./dlogin' element={<Login/>}/> */}
        </Routes>
      </Router>
      {/* <Landing/> */}
    </div>
  );
}

export default App;
