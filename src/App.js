import './App.css';
import './assets/style/style.css'
import { Routes, Route } from "react-router-dom";
import UserPage from './components/userPage';
import UserDetail from './pages/userDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/user-detail/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
