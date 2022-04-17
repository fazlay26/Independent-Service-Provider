
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Chekout from './Components/Chekout/Chekout';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import RequiredAuth from './Components/RequiredAuth/RequiredAuth';
import SignUp from './Components/SignUp/SignUp';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/SignUp' element={<SignUp></SignUp>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Chekout' element={<RequiredAuth>
          <Chekout></Chekout>
        </RequiredAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
