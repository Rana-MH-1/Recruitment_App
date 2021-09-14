import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';



import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage'
import HomePosts from './Pages/HomePosts'
import Loading from './Components/Loading'
import PrivateRoute from './PrivateRoutes/PrivateRoute'
import Navbar from './Components/Navbar';
import MyApplies from './Pages/MyApplies';
import ReceivedApplies from './Pages/ReceivedApplies'
import MyMeeting from './Pages/MyMeeting'
import MyPosts from './Pages/MyPosts';

import Home from './Pages/Home'



function App() {
  return (
    <>
      <Router>
        <Loading/>
        <Navbar/>
         <Switch>
           <Route exact path="/register" component={RegisterPage} />
           <Route exact path="/login" component={LoginPage} />
           <Route exact path="/home" component={Home} />
           <PrivateRoute path={'/Profile/:id'} exact component={AboutPage} />
           <PrivateRoute exact path="/" component={HomePosts} />
           <PrivateRoute exact path="/MyApplies" component={MyApplies}/>
           <PrivateRoute exact path="/AppliesList" component={ReceivedApplies}/>
           <PrivateRoute exact path='/MyMeeting' component={MyMeeting} />
           <PrivateRoute exact path='/MyPosts' component={MyPosts} />
           
         </Switch>
      </Router>
    </>
  );
}

export default App;
