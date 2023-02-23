import React, { Component } from "react";
import party_img from '../../../assets/party.jpg'
import Button from '@mui/material/Button';

import {userContext} from '../../../context/userContext'; // contexto

class Home extends Component {

  static contextType = userContext; //Contexto desde JS

  constructor(props) {
    super(props)
  
    this.username = React.createRef();

    this.state = {
      username:""
    }

  }

  sendName = () => {
    //***CONSUMER***
    const {login} = this.context; // Consume contexto desde JS
    
    login(this.state.username);// enviar nombre por contexto
    alert("Nombre enviado: " + this.state.username);
    
    // Vaciar input + state
    this.username.current.value = "";
    this.setState({ username: "" });
  }
  handleChange = () => {
    const username = this.username.current.value; //Leer campo por referencia
    this.setState({ username });
  }

  render() {
    return <div>
      <h1>Welcome to the party!</h1>
      <img src={party_img} className="party_img" alt="party"/>

      <div>
          <h1>Introduce tu nombre</h1>
          <input type="text" ref={this.username} onChange={this.handleChange} placeholder="Ej: Freddie Mercury" />
          {this.state.username ? <Button variant="contained" onClick={this.sendName}>Login</Button> : ""}
        </div>
    </div>;
  }
}

export default Home;
