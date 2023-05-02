import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout';
import Register from "./components/Register"
import Login from "./components/Login"

import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
