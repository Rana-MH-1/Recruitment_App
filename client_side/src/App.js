import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import RegisterPage from './Components/RegisterPage'

function App() {
  return (
    <>
      <Router>
         <Switch>
           <Route exact path="/register" component={RegisterPage} />
         </Switch>
      </Router>
    </>
  );
}

export default App;
