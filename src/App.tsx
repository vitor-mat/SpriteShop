import CssBaseline from '@mui/material/CssBaseline';

import { Header } from './components/Header/index';

import { Messages } from './pages/Messages/index';

function App() {

  return (
    <>
      <CssBaseline />
      <Header />
      <Messages />
    </>
  )
}

export default App
