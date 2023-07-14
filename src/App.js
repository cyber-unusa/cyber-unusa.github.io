import{ Routes, Route } from 'react-router-dom'
import './App.css';
import { About } from './Component/About';
import Home from './Component/Home';
import Member from './Component/Member';
import Login from './Component/Login';
import { Services } from './Component/Services';

function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/member' element={<Member />} />
        <Route path='/login' element={<Login />} />
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </div>
  );
}

export default App;
