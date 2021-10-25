import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { AppRouters } from './components/AppRouters';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { RegistroUsuario } from './components/usuarios/RegistroUsusario';
import { PortadaLogin } from './components/PortadaLogin';
import { SalirUsuario, auth, consultaPorItemDocumentos, guardarDatabase } from './config/firebase';
import { useEffect } from 'react';
import { LoadingPage } from "./components/LoadingPage";


function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false)

  const handleSalir = async (e) => {
    e.preventDefault()
    await SalirUsuario()
  }


  useEffect(() => {

    onAuthStateChanged(auth, async (usuario) => {
      setLoading(true)
      if (usuario) {

        const consulta = await consultaPorItemDocumentos("lista-usuarios", "email", "==", usuario.email);
        if (consulta.length === 0) {
          const user = {
            uid: usuario.uid,
            nombres: usuario.displayName,
            email: usuario.email,
            genero: "",
            fechaNa: "",
            rol: 0
          }

          await guardarDatabase('lista-usuarios', user);


        }


        setUser(usuario);

      }
      else {
        setUser(null)

      }
      setLoading(false)
    })

  }, [setUser])

  return (
    <>
      {
        loading
          ?
          <LoadingPage />
          :
          <div>
            <div id="btn-signOut" className={user ? "btn-signOut" : "btn-signOut visibilidad"}>
              <button

                onClick={handleSalir}
              >Cerrar sesión</button>
            </div>
            <Router>
              <Switch>
                <Route exact path="/" children={user ? <AppRouters User={user} /> : <Redirect to="/p" />} />
                <Route exact path="/Registro" children={user ? <Redirect to="/" /> : <RegistroUsuario />} />
                <Route path="/p" children={user ? <Redirect to="/" /> : <PortadaLogin />} />
                <Route exact path="*" children={user ? <Redirect to="/" /> : <Redirect to="/p" />} />
              </Switch>
            </Router>
          </div>}

    </>
  );
}

export default App;
