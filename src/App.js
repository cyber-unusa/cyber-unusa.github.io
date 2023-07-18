import{ Routes, Route } from 'react-router-dom'
import './App.css';
import { About } from './Component/About';
import Home from './Component/Home';
import Member from './Component/Member';
import Login from './Component/Login';
import { Services } from './Component/Services';
import CoomingSoon from './UI/CoomingSoon';

function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/member' element={<Member />} />
        <Route path='/login' element={<Login />} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/cooming' element={<CoomingSoon/>}/>
      </Routes>
    </div>
  );
}

export default App;
