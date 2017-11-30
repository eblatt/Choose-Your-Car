import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';
import Flag from './Image';


const produce = [
{name: "Toyota Highlander", speedtext: "0-60mph in seconds:", speed: 7.0 , price:"Price Range: 25,000-100,000",image: require("./images/toyotahighlander.png"), type: "Enviornmentally-Friendly"},
{name: "Nissan Versa Sedan", speedtext: "0-60mph in seconds:", speed: 9.2 , price:"Price Range: 25,000 or less",image: require("./images/nissanversaseda.png"), type: "Enviornmentally-Friendly"},
{name: "Tesla Model S", speedtext: "0-60mph in seconds:", speed: 2.3 , price:"Price Range: 100,000 or greater", image: require("./images/tesla.png"), type: "Not Enviornmentally-Friendly"},
{name: "Mini Cooper",speedtext: "0-60mph in seconds:", speed: 6.7 ,  price:"Price Range: 25,000 or less", image: require("./images/minicooper.png"), type: "Enviornmentally-Friendly"},
{name: "Mercedes SUV GLC300",speedtext: "0-60mph in seconds:", speed: 7.3 , price:"Price Range: 25,000-100,000",image: require("./images/mercedessuv.png"),type: "Not Enviornmentally-Friendly"},
{name: "Smart Car", speedtext: "0-60mph in seconds:",speed: 11.2 ,  price:"Price Range: 25,000 or less", image: require("./images/smartcar.png"), type: "Enviornmentally-Friendly"},
{name: "Audi A3 Cabriolet 1.4 S-Line", price:"Price Range: 25,000-100,000", speedtext: "0-60mph in seconds:",speed: 8.8 , image: require("./images/audi.png"), type: "Not Enviornmentally-Friendly"},
{name: "Jeep Grand Cherokee Trailhawk",  price:"Price Range: 25,000 or less",speedtext: "0-60mph in seconds:",speed:7.4 , image: require("./images/jeep.png"), type: "Not Enviornmentally-Friendly"},
{name: "Aston Martin DB11",  price:"Price Range: 100,000 or greater",speedtext: "0-60mph in seconds:",speed: 3.8, image: require("./images/astonmartin.png"), type: "Not Enviornmentally-Friendly"},
{name: "Volkswagen Caravelle Gen 6", price:"Price Range: 25,000 or less", speedtext: "0-60mph in seconds:",speed: 9.8 , image: require("./images/volkswagonbeetle.png"), type: "Enviornmentally-Friendly"},
{name: "Porsche 911 Turbo S Cabriolet", price:"Price Range: 100,000 or greater",speedtext: "0-60mph in seconds:", speed: 2.6 ,image: require("./images/porche.png"), type: "Not Enviornmentally-Friendly"},
{name: "Toyota Prius Avalon Limited", price:"Price Range: 25,000 or less", speedtext: "0-60mph in seconds:",speed: 6.1 , image: require("./images/toyotaprius.png"), type: "Enviornmentally-Friendly"},
];

class App extends Component {
  render() {
    return (
      <div className="App">
      
          <FilteredList items={produce}/>
           
      </div>
      );
  }
}

export default App;
