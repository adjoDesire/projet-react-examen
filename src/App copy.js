import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      activities:[]
    };
  }

  componentDidMount(){
    fetch('http://localhost:3000/activities')
    .then(response => response.json())
    .then(teams => console.log(teams));
  }

  render(){
    return (
      <div >
        {this.state.activities.map(club =>(<h1 key= {club.id}> {club.name}</h1> ))}
      </div>
    );
  }
  
}

export default App;
