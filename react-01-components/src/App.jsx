import './App.css'
import { Footer } from './pages/footer/footer';
import { Navbar } from './pages/navbar/navbar';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { NotFound } from './pages/not-found/notFound';
/*
  BrowserRouter sirve para habilitar el enrutamiento basado en 
  la URL del navegador en tu aplicación React.

  Utiliza la API de Historial de HTML5 para:
   - Mantener la UI sincronizada con la URL: Cuando cambias de "página" 
   en tu aplicación, BrowserRouter actualiza la URL en la barra de 
   direcciones del navegador.
   - Permitir la navegación con los botones de "atrás" y "adelante" 
   del navegador: Escucha los cambios en el historial del navegador
    y actualiza la UI correspondientemente.
*/

function App() {                                                                                                                                                                                                                                             

  const myJsx = (
  // React Fragment <></>
    <BrowserRouter> {/* Envolver el componente principal para manejar las rutas, habilita el enrutamiento*/}
    {/* Navbar y footer se mostraran para todas las rutas */}
      <Navbar title = "Hoy es día de Harry Potter" ></Navbar>
      <Routes> {/* Define y agrupa un conjunto de rutas */}
        {/* Para controlar la rutas Route, path sobre que path de nuestro dominio y element nos controla 
        que elemento queremos mostrar, en este caso el home*/}
        <Route path = "/" element={<Home name = "Myrtle la llorona" howartsHome = "Ravenclaw"></Home>} />
        <Route path = "/products" element = {<Products />} />
        <Route path = "*" element = {<NotFound />} /> {/* Para controlar cuando se accede a una página no existente */}

      </Routes>
      <Footer cohorte = {54}></Footer>  
      {/* <Footer /> */}      
      
      
    </BrowserRouter>
        

  );
  return myJsx;

}

export default App
