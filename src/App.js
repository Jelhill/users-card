import React, { Component } from 'react'
import CardPack from "./Components/CardPack"
import Search from "./Components/Search"
import {players} from './Data/Data'
import './App.css';


export default class App extends Component {

    constructor() {
      super();
      this.state = {
        fetching: true,
        entries: [],
        players: players,
        searchField: "",
      }
    }

    async componentDidMount() {
      const apiUrl = 'https://jsonplaceholder.typicode.com/users';
      const response = await fetch(apiUrl)
      const data = await response.json();

      this.setState({
        entries: [...this.state.entries, ...data]
      })
    }

    onSearch = (event) => {
      this.setState({searchField: event.target.value})
    }

    

  render() {
   const filteredName = this.state.entries.filter((user) => {
     return user.name.toLowerCase().includes(this.state.searchField)
   })

    return (
      <React.Fragment>
        <Search onSearch={this.onSearch}/>
        <CardPack data={filteredName} players={this.state.players} />
      </React.Fragment>
    )
  }
}

//https://repl.it/@Jelhill/Create-React-App