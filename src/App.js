import './App.css';
import Message from './components/Message'
import Post from './components/Post'
import Login from './components/Login'
import ResContraseña from './components/ResContraseña';
import Registrarse from './components/Registrarse';
import Home from './components/Home';
import {BrowserRouter,Switch ,Route} from 'react-router-dom';
import Favorites from './components/Favorites';
import JProductSelected from './components/JProductSelected';


function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <Switch>
        <Route path="/favorites" component={Favorites}/>
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/restaurarcontraseña" component={ResContraseña}/>
          <Route path="/registrarse" component={Registrarse}/>
          <Route path="/chats" component={Message}/>
          <Route path="/post" component={Post}/>
          <Route path="/producto" component={JProductSelected}/>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
