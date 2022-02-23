import "./App.css";
import { Home } from "./pages/home/Home";
// import Landing from "./components/Landing/Landing";

function App() {
  return (
    <div className="App">
      {/* START- LOGIN*/}
      {/* <Landing /> */}
      {/* END - LOGIN SECTION */}

      {/* START-HOME */}
        <Home/>
      {/* END-HOME */}

      
    </div>
  );
}

export default App;
