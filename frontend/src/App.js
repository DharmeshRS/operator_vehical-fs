import './App.css';
import Homepage from './components/Homepage';
import {Routes,Route} from 'react-router-dom'
import Operator from './components/Operator';
import Vehicles from './components/Vehicles';
import Trips from './components/Trips';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Homepage />}> </Route>
    <Route  path="/operator" element={<Operator />} ></Route>
    <Route  path="/vehicle" element={<Vehicles />} ></Route>
    <Route  path="/trip" element={<Trips/>} ></Route>
    </Routes>
    </div>
  );
}

export default App;
