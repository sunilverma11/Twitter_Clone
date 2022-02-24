import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from './pages/home/Home';
import { Signin } from './pages/login/Login';
import { Signup } from './pages/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
