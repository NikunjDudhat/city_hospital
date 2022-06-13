
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import Department from './Container/Departments/Department';
import Doctor from './Container/Doctors/Doctor';
import Home from './Container/Home';
import Login from './Container/Login/Login';
import PrivateRoute from './Route/PrivateRoute';
import PublicRoute from './Route/PublicRoute';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/Department" component={Department} />
        <PublicRoute exact path="/Doctors" component={Doctor} />
        <PrivateRoute exact path="/About" component={About} />
        <PrivateRoute exact path="/Contact" component={Contact} />
        <PublicRoute restricted={true} exact path="/Login" component={Login} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
