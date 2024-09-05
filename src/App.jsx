import { Outlet } from 'react-router-dom';
import Header from './Componentes/Header';


function App() {

  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default App
