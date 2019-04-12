import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';


const API_KEY = "31a21f08aad5b9638342a1d969c2d49d";
const PRIVATE_KEY = "1a8885454b1635aff71fec0ebc9b8a8c23ea7dc8";
class App extends Component {

  state = {
    name: undefined,
    description:undefined,
    img_url: undefined,

  }

  getData = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const api_call = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=1&apikey=${API_KEY}&hash=abde282da11da99d9dd7415409ac712c`);
    const json = await api_call.json();
    const data = json.data.results[0];
    this.setState({
      name: data.name,
      description:data.description,
      img_url: data.thumbnail.path
    });

    console.log(json.data.results[0]);
  }

  render() {
    return (
      <div className="App">
        <Form getData={this.getData} />
        <br />
        <Display
          name={this.state.name}
          img_url={this.state.img_url}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;
