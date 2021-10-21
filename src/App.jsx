import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { AppRouters } from './components/AppRouters';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useState } from 'react';
import { RegistroUsuario } from './components/RegistroUsusario';
import { PortadaLogin } from './components/PortadaLogin';


function App() {
  const auth = getAuth();
  const [user, setUser] = useState(auth.currentUser);


  const handleSalir = (e) => {
    e.preventDefault()
    signOut(auth).then(() => {
      console.log("Sing Out");

    }).catch((error) => {
      console.log("No cerró sesión");
      console.log(error);
    })

  }
  


  onAuthStateChanged(auth, (usuario) => {
    if (usuario) {
      setUser(auth.currentUser);
      console.log("SI");
      return
    }
    else {
      console.log("So");
      setUser(auth.currentUser)
      return
    }
  })


  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" children={user ? <AppRouters User={user} /> : <Redirect to="/p" />} />
          <Route exact path="/Registro" children={user ? <Redirect to="/" /> : <RegistroUsuario Auth={auth} />} />
          <Route path="/p" children={user ? <Redirect to="/" /> : <PortadaLogin Auth={auth} />} />
          <Route exact path="*" children={user ? <Redirect to="/" /> : <Redirect to="/p" />} />
        </Switch>
      </Router>
      <button
        onClick={handleSalir}
      >Salir</button>
    </>
  );
}

export default App;
