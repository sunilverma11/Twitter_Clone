import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from './pages/home/Home';
import { Signin } from './pages/login/Login';
import { Signup } from './pages/Signup/Signup';
import Feed from './components/Home/Feed/Feed';
import { Profile } from './components/Home/Profile/Profile';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
      </Routes>
    </div>


  );
}

export default App;
