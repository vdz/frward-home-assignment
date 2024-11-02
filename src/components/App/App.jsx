import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import { Users } from '../../pages/Users';
import { Stats } from '../../pages/Stats';

function App() {

  return (
    <Router>
      <nav>
        <Link to="/">Stats</Link> | <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Stats />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  )
}

export default App
