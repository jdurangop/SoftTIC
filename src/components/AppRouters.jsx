import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { LandingPage } from "./LandingPage";
import styleHome from "../css/HomePage.module.css"
import { ListaUsuarios } from "./usuarios/ListaUsuarios";
import { HistorialVentas } from './ventas/historialVentas';
// import { PageNotFound } from './PageNotFound';
import { HistorialProductos } from './productos/HistorialProductos';
import { ModificarUsuario } from './usuarios/ModificarUsuario';
import { RegistroVenta } from './ventas/RegistroVenta';
import { RegistroProducto } from './productos/RegistroProducto';
import { CompletarRegistros } from './usuarios/nuevos/CompletarRegistros'
import { consultaPorItemDocumentos } from './../config/firebase';
import { useState } from 'react';
import { useEffect } from 'react';

export function AppRouters({ User }) {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [rol, setRol] = useState("");
    const [id, setId] = useState("");

    const cargarDatosUsuario = async (usuario) => {

        const resultUsuario = await consultaPorItemDocumentos("lista-usuarios", "email", "==", usuario.email)

        setEmail(resultUsuario[0].email)
        setName(resultUsuario[0].nombres)
        setRol(resultUsuario[0].rol)
        setId(resultUsuario[0].id)
    }


    useEffect(() => {
        cargarDatosUsuario(User)
        
        setEmail("")
        setName("")
        setRol("")
        setId("")
    }, [User])


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
                        {`${name ? name : "Sin Nombre"}`}
                    </span>
                    <br />
                    <small>
                        {`(${email})`}
                    </small>
                </div>
            </header>

            <main>
                <Switch>

                    <Route exact path="/users" children={rol !== 1 ? <Redirect to="/" /> : <ListaUsuarios />} />
                    <Route exact path="/users/:id" children={rol !== 1 ? <Redirect to="/" /> : <ModificarUsuario />} />

                    <Route exact path="/sales" children={rol !== 0 ? <HistorialVentas Rol={rol} /> : <Redirect to="/" />} />
                    <Route exact path="/sales/:id" children={rol !== 0 ? <RegistroVenta Rol={rol} /> : <Redirect to="/" />} />

                    <Route exact path="/products" children={rol !== 1 ? <Redirect to="/" /> : <HistorialProductos />} />
                    <Route exact path="/products/:id" children={rol !== 1 ? <Redirect to="/" /> : <RegistroProducto />} />

                    <Route exact path="/ComReg" children={rol !== 0 ? <Redirect to="/" /> : <CompletarRegistros idUser={id}  />} />

                    <Route exact path="/" children={<LandingPage Rol={rol} />} />
                </Switch>
            </main>
        </Router>
    );
}