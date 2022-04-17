
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chekout from './Components/Chekout/Chekout';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/SignUp' element={<SignUp></SignUp>}></Route>
        <Route path='/Chekout' element={<Chekout></Chekout>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
