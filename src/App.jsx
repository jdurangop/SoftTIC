import './App.css';
import { AppRouters } from './components/AppRouters';
import { Login } from './components/Login';




function App() {
  let user = false;
  return (
    user 
    ?
    <AppRouters/>
    :
    <Login/>
  );
}

export default App;
