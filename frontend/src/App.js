import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from './pages/Index';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { SignupForm } from './components/ManualSignup';

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
