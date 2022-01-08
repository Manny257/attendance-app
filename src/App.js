import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Landing from './components/Landing';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Attendance from './components/Attendance';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}

export default App;
