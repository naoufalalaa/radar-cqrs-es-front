import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home';
import Vehicules from './pages/vehicules/Vehicules';
import AddVehicule from './pages/vehicules/AddVehicule';

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/vehicules" element={<Vehicules/>} />
          <Route path="/vehicules/addVehicule" element={<AddVehicule/>} />
        </Routes>
    </Router>
  );
}

export default App;
