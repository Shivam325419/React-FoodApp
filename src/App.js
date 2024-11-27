import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path="/Section2 " element={<Section2 />} />
          <Route path="/menu" element={<Section3 />} />
          <Route path="/shop" element={<Section4 />} />
          <Route path="/blog" element={<Section5 />} />
          <Route path="/contact" element={<Section6 />} />
          <Route path="/footer" element={<Section7 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
