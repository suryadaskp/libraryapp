/* eslint-disable react/jsx-no-undef */


import './App.css';

import SignUp from './components/SignUp';
import UserView from './components/UserView';
import Login from './components/Login'
import AdminLogin from './components/AdminLogin';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';



function App() {
  return (
    <div className="App">
       {/* <WelcomePage/>  */}
{/* <Routes> */}
  {/* <Route path="/" element={<WelcomePage/>}></Route> */}
  {/* <Route path='/Login' element={<Login/>}/> */}
  {/* <Route path='/signup' element={<SignUp/>}/> */}
  {/* </Routes> */}
      
  {/* <AdminLogin/> */}


       {/* <SignUp/>    */}
      
       {/* <UserView/> */}
  
    {/* <Display/> */}
    <Login/>
    </div>
  );
}

export default App;
