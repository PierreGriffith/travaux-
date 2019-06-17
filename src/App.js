import React, { Component } from 'react';

import axios from "axios"

import './App.css';
import '../node_modules/bulma/bulma.sass';

import Piece from "./components/piece/Piece";
import Header from './components/header';
import Footer from './components/footer';
import AffLot from './components/lot'




class App extends Component {
  
    
  constructor(){
    super(); //sets context for this
    this.state = {
        name: '',
        phoneNumber:'',
        locations:[],
        lots: [],
        prixTotalHT:'',
        prixTotalTTC: ''
    }
  }

  componentDidMount() {
   axios.get( 'https://api.travauxlib.com/api/devis-pro/JKusHl8Ba8MABIjdCtLZOe2lxxnUfX' )
       .then( response => this.setState({
            name: response.data.company.name,
            phoneNumber:response.data.company.phoneNumber,
            locations: response.data.locations,
            prixTotalHT: response.data.sections[0].prixTotalHT,
             prixTotalTTC: response.data.sections[0].prixTotalTTC,
             lots: response.data.sections[0].lots,
        }))
}
    
    render() {
    return (
      <div className="App">
          <div className="columns">
              <div className="column">

              </div>
          </div>
          <Header  name={this.state.name} phoneNumber={this.state.phoneNumber} />
              <div className="columns">
                <div className="column">

                </div>
              </div>

          <Piece piece={this.state.locations}/>
          <div className="columns">
              <div className="column">

              </div>
          </div>

          <h2 className="title">Travaux</h2>

          <AffLot lot={this.state.lots}/>
          <div className="columns">
              <div className="column">

              </div>
          </div>
          <Footer ht={this.state.prixTotalHT} ttc={this.state.prixTotalTTC}/>
          <div className="columns">
              <div className="column">

              </div>
          </div>

      </div>
    );
  }
}



export default App