import React, { Component } from 'react';
import './App.css';
import  CharactersList from './components/CharactersList';
import Paganation from './components/Paganation'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next:"",
      prev:null,
      count:0
    };
  }

  componentDidMount() {
  
    this.getCharacters(`https://swapi.co/api/people/?page=`);
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json()  ;
      })
      .then(data => {
        this.setState({ starwarsChars: data.results ,
          next: data.next,
          prev:data.previous,
          
        });
      })
      .catch(err => {
        throw new Error(err);
      });
    
  };

Count = (count)=>{
  this.setState({ count:count+=1})
  
}

  render() {
   console.log(this.state.next)
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharactersList  starwarsChars={this.state.starwarsChars} />
        <Paganation getCharacters={this.getCharacters} next={this.state.next} prev={this.state.prev}/>
        <button onClick={this.state.count} >CLICKME</button>
      </div>
    );
  }
}

export default App;
