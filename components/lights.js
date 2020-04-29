import React from 'react';
import Popup from 'reactjs-popup';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from "@material-ui/icons/Home";
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ShutterSpeedIcon from '@material-ui/icons/ShutterSpeed';
import { Button } from 'semantic-ui-react'
import Toggle from './toggle'


class Lights extends React.Component {
    state = {
            createdToken:null,
            turnOnLight:null,
            turnOffLight:null
        }
    
       
    
    fetchToken(){
        fetch("https://192.168.2.120:8080/json/system/login?user=dssadmin&password=momo2103")
        .then((res)=>res.json()).then(data=>this.setState({createdToken:data.result.token}));
    }
    fetchApiOff(){
        this.fetchToken();
        fetch("https://192.168.2.120:8080/json/device/turnOff?dsuid=2f9ab2108161565ec0a53d70c5eb045600&token=")
        .then((res)=>res.json()).then(data1=>this.setState({turnOffLight:data1.ok}));
    }
     async componentDidMount(){
        this.fetchToken();

        const conn3="https://192.168.2.120:8080/json/device/turnOn?dsuid=2f9ab2108161565ec0a53d70c5eb045600&token=";//Turning on green light in wohnzimmer
        var conn4=conn3+(this.state.createdToken);
        const response2=await fetch(conn4);
        const data2= await response2.json();
        console.log(data2);
        this.setState((state)=>({turnOnLight:data2.ok}));    
    }
         
    off(){             
        if (this.state.turnOffLight===true)
            window.alert("Turned off");
    }

    render() {
        return (
        <>  
         <br />      
       <React.Fragment>
            <div className="container">
                <h3>Lights</h3>            
        <List>
            <ListItem>             
            <ListItemIcon>
                <HomeIcon className="sidebar-item-icon" fontSize="large"/>
            </ListItemIcon>
            <div className="sidebar-item-text">
                Living Room
            </div>
            <Toggle />
            </ListItem>
        </List>
        </div> 
        </React.Fragment>
        </>
        );
    }
}

export default Lights;