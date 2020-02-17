import React, { Component } from 'react';
import './styles.css';
import { Icon } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';

class Presets1 extends Component {
  state = {     
    status:null
   }

   async componentDidMount(){
    const conn="https://192.168.2.120:8080/json/system/login?user=dssadmin&password=momo2103";
    const response= await fetch(conn);
    const data= await response.json();
    console.log(data);
    this.setState({status:data.result.token});//token or ok
   }

   presetWorking(){
     if (this.state.status==='true') 
      return console.log('Success')
   }

   offButton(){

   }

  render() { 
    return ( 
    <>
    <div className="container">
      <h2>All Heaters</h2>
      <button onClick={this.offButton} className="btn btn-secondary btn-sm">
        Turn Off
      </button>
      {this.presetWorking()}
      
    </div>
    </> );
  }
}
 
export default Presets1;