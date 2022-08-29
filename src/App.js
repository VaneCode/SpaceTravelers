import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rockets from './pages/Rockects/Rockects';
import Missions from './pages/Missions/Missions';
import Profile from './pages/Profile/Profile';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  </div>
);

export default App;
