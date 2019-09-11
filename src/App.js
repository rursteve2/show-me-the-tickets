import React, { Component } from 'react';
import './App.css';
import json from './eventlist'
import AllEvents from './components/AllEvents'
import { Route, Switch, Link } from 'react-router-dom'
import OneEventInfo from './components/OneEventInfo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
  }

  componentDidMount = () => {
    this.getEvents()
  }

  getEvents = async () => {
    let data = json
    await this.setState({data})
    console.log(this.state.data)
  }

  render() { 
    return (
      <div className="App">
        <h1>Elton John Events</h1>
        <Switch>
          <Route exact path="/" render={() => 
            <AllEvents 
            data={this.state.data}
            />}
          />
          <Route path="/:id" render={({ match }) => (<OneEventInfo oneEvent={this.state.data.Items[match.params.id]}/>)} />
        </Switch>
      </div>
    );
  }
}

export default App;
