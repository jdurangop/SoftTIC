import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { LandingPage } from "./LandingPage";
import styleHome from "../css/HomePage.module.css"
import { ListaUsuarios } from "./ListaUsuarios";
import { HistorialVentas } from './historialVentas';
import { HistorialProductos } from './HistorialProductos';
import { ModificarUsuario } from './ModificarUsuario';
import { RegistroVenta } from './RegistroVenta';
import { RegistroProducto } from './RegistroProducto';
// import { PageNotFound } from './PageNotFound';

export function AppRouters({User}) {
        
    return (
        <Router>
            <header className={styleHome.HeaderHome}>
                <div className={styleHome.groupLogoHome}>
                    <Link className={styleHome.linkLogoHome} to="/">
                        <img src="https://cdn.pixabay.com/photo/2014/04/02/10/55/health-304919_960_720.png" alt="Logo" className={styleHome.logoSM} /> <span className={styleHome.textoSM}>SM</span>
                    </Link>
                </div>
                <div className={styleHome.HeaderWelcome}>
                    <span className={styleHome.textWWelcome}>
                        Bienvenido {`${User.displayName}`}
                    </span>
                </div>
            </header>

            <main>
                <Switch>
                
                    <Route exact path="/users" component={ListaUsuarios} />
                    <Route exact path="/users/:id" component={ModificarUsuario} />
                    <Route exact path="/sales" component={HistorialVentas} />
                    <Route exact path="/sales/:id" component={RegistroVenta} />
                    <Route exact path="/products" component={HistorialProductos} />
                    <Route exact path="/products/:id" component={RegistroProducto} />
                    <Route exact path="/" component={LandingPage} />
                </Switch>
            </main>
        </Router>
    );
}