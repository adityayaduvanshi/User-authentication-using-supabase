//hooks
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components and pages
import SignupForm from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="pt-20">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signup" component={SignupForm} />
            <Route path="/login" component={Login} />
            <Route path="/reset" component={ResetPassword} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
