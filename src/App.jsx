import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { LandingPage } from "./pages/LandingPage";
import styleHome from "./css/HomePage.module.css"
import { ListaUsuarios } from "./pages/ListaUsuarios";
import { HistorialVentas } from './pages/historialVentas';
import { HistorialProductos } from './pages/HistorialProductos';



function App() {
  return (
    <Router>
      <header className={styleHome.HeaderHome}>
        <Link className={styleHome.linkLogoHome} to="/">
          <img src="https://cdn.pixabay.com/photo/2014/04/02/10/55/health-304919_960_720.png" alt="Logo" className={styleHome.logoSM} /> <span className={styleHome.textoSM}>SM</span>
        </Link>
        <span className={styleHome.HeaderWelcome}>
          Bienvenido "Pepito"
        </span>
      </header>

      <main>
        <Switch>
          <Route exact path="/users">
            <ListaUsuarios/>
          </Route>
          <Route exact path="/sales">
            <HistorialVentas/>
          </Route>
          <Route exact path="/products">
            <HistorialProductos/>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
