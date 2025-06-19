import './App.css'
import { Footer } from './pages/footer/footer';
import { Navbar } from './pages/navbar/navbar';
import { Home } from './pages/home/home';

function App() {

  const myJsx = (
  // React Fragment <></>
  <> 
    <Navbar></Navbar>
    <Home></Home>
    <Footer></Footer>  
    {/* <Footer/> */}
  </>
      

  );
  return myJsx;

}

export default App
