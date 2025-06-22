import './App.css'
import { Footer } from './pages/footer/footer';
import { Navbar } from './pages/navbar/navbar';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';

function App() {                                                                                                                                                                                                                                             

  const myJsx = (
  // React Fragment <></>
  <> 
    <Navbar title = "Hoy es día de Harry Potter" ></Navbar>
    <Home name = "Myrtle la llorona" howartsHome = "Ravenclaw"></Home>
    <Home name = "Sercherus Snape" howartsHome = "Slytherin"></Home>
    <Products />
    <Footer cohorte = {54}></Footer>  
    {/* <Footer /> */}
    
  </>
      

  );
  return myJsx;

}

export default App
