import './App.css'
import { Footer } from './pages/footer/footer';
import { Navbar } from './pages/navbar/navbar';
import { Home } from './pages/home/home';

function App() {

  const myJsx = (
  // React Fragment <></>
  <> 
    <Navbar></Navbar>
    <Home name = "Myrtle la llorona" howartsHome = "Ravenclaw"></Home>
    <Home name = "Sercherus Snape" howartsHome = "Slytherin"></Home>
    <Footer cohorte = {54}></Footer>  
    {/* <Footer/> */}
  </>
      

  );
  return myJsx;

}

export default App
