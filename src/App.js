import './App.css';
import Message from './components/Message'
import ResContraseña from './components/ResContraseña';
import Registrarse from './components/Registrarse';
import Home from './components/Home';
import {BrowserRouter,Switch ,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/restaurarcontraseña" component={ResContraseña}/>
          <Route path="/registrarse" component={Registrarse}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
