import './App.css';
// import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import {Component} from "react";
import { Navbar } from './components/Navbar';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { home, about, browse, contactus } from './pages/home';
import Home from './pages/home';
import About from './pages/about';
import Browse from './pages/browse';
import Contactus from './pages/contactus';
import Signin from './pages/signin';
import SignUp from './pages/signup';

const AppContainer = styled.div`
  display: 'flex';
`;

class App extends Component {
  constructor(props) {
    super(props);
    // this.setState( { apiResponse: apiRequest} )
    this.state = { 
      apiResponse: "",
      
    };
  }

  callAPI() {
    fetch("http://localhost:9000/")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <AppContainer>
        <Router>
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/browse" component={Browse} />
              <Route exact path="/contactus" component={Contactus} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/signup" component={SignUp} />
            </Switch>
        </Router>
      </AppContainer>
    );
  }
}

export default App;
