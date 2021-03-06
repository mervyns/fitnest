import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import EventDashboard from "./components/event/EventDashboard/EventDashboard";
import NavBar from "./components/nav/NavBar/NavBar";
import HomePage from "./components/home/HomePage";
import EventDetailedPage from "./components/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "./components/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "./components/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "./components/user/Settings/SettingsDashboard";
import EventForm from "./components/event/EventForm/EventForm";
import TestComponent from "./components/test";
import LoginForm from './components/auth/LoginForm'
import RegisterForm from './components/auth/RegisterForm'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/event/:id" component={EventDetailedPage} />
                  <Route path="/manage/:id" component={EventForm} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/test" component={TestComponent} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/createEvent" component={EventForm} />
                  <Route path="/login" component={LoginForm} />
                  <Route path="/register" component={RegisterForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
