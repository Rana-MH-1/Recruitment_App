import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage'
import HomePosts from './Pages/HomePosts'
import Loading from './Components/Loading'
import PrivateRoute from './PrivateRoutes/PrivateRoute'
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
      <Router>
        <Loading/>
        <Navbar/>
         <Switch>
           <Route exact path="/register" component={RegisterPage} />
           <Route exact path="/login" component={LoginPage} />
           <PrivateRoute exact path="/" component={HomePosts} />
           
         </Switch>
      </Router>
    </>
  );
}

export default App;


