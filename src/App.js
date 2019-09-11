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
  }


  onChange = (e) => {
    let newCity = this.state.data.filter((el) => (el.VenueCity == e.target.value))
    this.setState({
        newData: newCity
    })
}

  filterData = (e) => {
    let value = e.target.value
    let data = json.Items
    if(value == "price") {
      data.sort((a, b) => a.MinPrice.replace(/\D/g, "")-b.MinPrice.replace(/\D/g, ""))
      this.setState({newData: data})
    } else if(value == "time") {
      data.sort((a, b) => a.DateVal.replace(/\D/g, "")-b.DateVal.replace(/\D/g, ""))
      this.setState({newData:data})
    } else if(value == "ticketsleft") {
      data.sort((a, b) => parseInt(a.AvailableTickets)-parseInt(b.AvailableTickets))
      this.setState({newData:data})
    }
  }

  render() { 
    return (
      <div className="App">
        <Link to="/" onClick={this.componentDidMount}><h1>Elton John Events</h1></Link>
        <Switch>
          <Route exact path="/" render={() => 
            <AllEvents 
            data={this.state.newData}
            locations={this.state.locations}
            onChange={this.onChange}
            filterData={this.filterData}
            />}
          />
          <Route path="/:id" render={({ match }) => (<OneEventInfo oneEvent={this.state.data.find((el) => (el.EventId == match.params.id))}/>)} />
        </Switch>
      </div>
    );
  }
}

export default App;
