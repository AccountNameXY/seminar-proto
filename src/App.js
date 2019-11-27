import React, { Component } from "react";
import './App.css';
import HelloScreen from './Routes/helloScreen';
import BruteForce from "./Routes/bruteForce";
import Netzplan from "./Routes/netzplan";
import Sidebar from "./Components/sidebar"
import Header from "./Components/header"
import { Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {


  render() {
    return (
      <div className="App" >
        <Row>
          <Col xl="2" lg="2">
            <Sidebar />
          </Col>
          <Col xl="10" lg="10">
            <Row>
              <Col>
                <Header />
              </Col>
            </Row>
            <Row>
              {/* <Col> */}
              <Router>
                <Route exact path="/" component={(props) => < HelloScreen {...props} />} />
                <Route path="/bruteForce" component={(props) => < BruteForce {...props} />} />
                <Route path="/netzplan" component={Netzplan} />
              </Router>
              {/* </Col> */}
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default App;
