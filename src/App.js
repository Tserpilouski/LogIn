import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout';
import Register from "./components/Register"
import Login from "./components/Login"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
  );
}

export default App;
