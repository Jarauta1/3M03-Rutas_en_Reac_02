import './App.css';
import {BrowserRouter,Route} from "react-router-dom"
import Cabecera from "./cabecera"
import Footer from "./footer"
import Perros from "./perros"
import Gatos from "./gatos"

function App() {
 

  return(<BrowserRouter>
  <Cabecera/>
  <Route exact path="/">
  </Route>
  <Route exact path="/perros">
  <Perros/>
  </Route>
  <Route exact path="/gatos">
  <Gatos/>
  </Route>
  <Footer/>
  </BrowserRouter>)
}

export default App;
