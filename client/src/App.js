
import { BrowserRouter, Routes, Route } from "react-router-dom";


//COMMENT: Pages
import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';


function App() {


  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <div id="page-body">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/info" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
