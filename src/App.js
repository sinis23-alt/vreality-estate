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
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/restaurarcontraseña" component={ResContraseña}/>
          <Route exact path="/registrarse" component={Registrarse}/>
          <Route exact path="/chats" component={Message}/>
          <Route exact path="/post" component={Post}/>
          <Route exact path="/producto" component={JProductSelected}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
