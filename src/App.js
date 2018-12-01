import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "./components/event/EventDashboard/EventDashboard";
import NavBar from "./components/nav/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Re-vents</h1>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
