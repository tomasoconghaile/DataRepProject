import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';
import { Content } from './componenets/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import{BrowserRouter as Router, Switch, Route} from'react-router-dom';
import { CreateTeam } from './componenets/createTeam';
import { ShowTeams } from './componenets/showTeams';
import { Edit } from './componenets/edit';
//import { Tables} from './componenets/tables';
import { Highlights } from './componenets/highlights';

class App extends Component{
  render() {
    return(
      <Router>
    <div className="App">
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Premier League</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/ShowTeams">Show Teams</Nav.Link>
      <Nav.Link href="/CreateTeam">Create</Nav.Link>
      <Nav.Link href="/highlights">Highlights</Nav.Link>
      
      
    </Nav>
    </Navbar>
    <br />
    <Switch>
      <Route path='/' component={Content} exact/>
      <Route path='/CreateTeam' component={CreateTeam} exact/>
      <Route path='/ShowTeams' component={ShowTeams} exact/>
      <Route path='/edit/:id' component={Edit}></Route>
      <Route path='/highlights' component={Highlights}></Route>
     
    </Switch>
     
      </div>
      </Router>
  );
}
}

export default App;
