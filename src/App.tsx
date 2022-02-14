import CssBaseline from '@mui/material/CssBaseline';

import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/index';

import { Home } from './pages/Home/index';
import { Messages } from './pages/Messages/index';
import { MyCart } from './pages/MyCart/index';

function App() {

  return (
    <>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/my-cart" element={<MyCart />} />
      </Routes>
    </>
  )
}

export default App
