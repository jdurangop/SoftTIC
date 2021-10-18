import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { PortadaLogin } from "./PortadaLogin";
import { RegistroUsuario } from './RegistroUsusario';

export function Login(){
    return(
        <Router>
            <Switch>
                <Route exact path="/Registro" component={RegistroUsuario} />
                <Route path="/" component={PortadaLogin}/>
            </Switch>
        </Router>
    );
}