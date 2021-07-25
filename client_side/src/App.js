import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage'
import Home from './Pages/Home'
import Loading from './Components/Loading'

function App() {
  return (
    <>
      <Router>
        <Loading/>
         <Switch>
           <Route exact path="/register" component={RegisterPage} />
           <Route exact path="/login" component={LoginPage} />
           <Route exact path='/' component={Home} />
         </Switch>
      </Router>
    </>
  );
}

export default App;
