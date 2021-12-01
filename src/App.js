import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from './logo.svg'
import './App.css';
import Title from "./Title";
import NPlist from "./NPlist";
import About from "./About";
import NDetail from "./NDetail";


function App() {
  return (

    <Router>
      < div className="App">

        <Title />



        <Routes>
          <Route path="/" element={<NPlist />} />
          <Route path="/about" element={<About />} />
          <Route path='/detail/:id' element={<NDetail />} />
          {/* <Route path="/details/:id" element={<NPetails />} /> */}

        </Routes>

      </div>
    </Router>


  );
}

export default App;
