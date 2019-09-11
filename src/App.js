import React, { Component } from 'react';
import './App.css';
import json from './eventlist'
import AllEvents from './components/AllEvents'
import { Route, Switch } from 'react-router-dom'
import OneEventInfo from './components/OneEventInfo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: null,
      locations: [],
      newData: null
    }
  }

  componentDidMount = () => {
    this.getEvents()
  }

  getEvents = async () => {
    let data = json.Items
    let locations = []
    for(let i = 0; i < data.length; i++) {
      if(!locations.includes(data[i].VenueCity)) {
      locations.push(data[i].VenueCity)
      }
    }
    await this.setState({data, locations, newData: data})
    console.log(this.state.locations)
  }


  onChange = (e) => {
    console.log(e.target.value)
    let newCity = this.state.data.filter((el) => (el.VenueCity == e.target.value))
    console.log(newCity)
    this.setState({
        newData: newCity
    })
}

  render() { 
    return (
      <div className="App">
        <h1>Elton John Events</h1>
        <Switch>
          <Route exact path="/" render={() => 
            <AllEvents 
            data={this.state.newData}
            locations={this.state.locations}
            onChange={this.onChange}
            />}
          />
          <Route path="/:id" render={({ match }) => (<OneEventInfo oneEvent={this.state.data.find((el) => (el.EventId == match.params.id))}/>)} />
        </Switch>
      </div>
    );
  }
}

export default App;
