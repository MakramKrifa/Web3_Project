import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
// import Posts from './pages/Posts';
import Products from './pages/Products';

import {  useState } from 'react';
import Navbar from './components/Navbar.jsx'
import SideUserPage from './components/Dashboard/SideUserPage';
import DashboardLayout from './components/Dashboard/DashboardLayout';
import Dashboard from './components/Dashboard/Dashboard';
import UserPage from './components/Dashboard/UserPage';


function App() {
  const [isPlusModalclosed, setIsisPlusModalclosed] = useState(false);
  const [isPlusModalopened, setIsisPlusModalopened] = useState(true);
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Products Show={isPlusModalclosed}  />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/Posts' element={<Posts/>}/> */}
        {/* <Route path='/products' element={<Products/>}/> */}
        <Route path='/dashboard' element={<DashboardLayout/>}>
          <Route path='' element={<Dashboard/>} />
          <Route path='products' element={<Products Show={isPlusModalopened}/>}/>
          <Route path='Users' element={<UserPage/>}/>
          <Route path='sidebar' element={<div>sidebar</div>}/>
        </Route>
      </Routes> 
    </div>
  );
}

export default App;


