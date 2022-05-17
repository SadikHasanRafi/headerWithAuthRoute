import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Order from './Component/Order/Order';
import About from './Component/About/About';
import SignIn from './Component/Account/SignIn/SignIn';
import SignUp from './Component/Account/SignUp/SignUp';
import FourZeroFour from './Component/FourZeroFour/FourZeroFour';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<FourZeroFour></FourZeroFour>}></Route>
      </Routes>
    </div>
  );
}

export default App;
