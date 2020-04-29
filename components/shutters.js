import React from 'react';
import Popup from 'reactjs-popup';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from "@material-ui/icons/Home";
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ShutterSpeedIcon from '@material-ui/icons/ShutterSpeed';
import { Button } from 'semantic-ui-react';
import Toggle from './toggle';


class Shutters extends React.Component {

    render() {
        return (
        <>        
       
       <br />
        <React.Fragment>
            <div className="container">
                <h3>Shutters</h3>            
        <List>
            <ListItem>             
            <ListItemIcon>
                <HomeIcon className="sidebar-item-icon" fontSize="large"/>
            </ListItemIcon>
            <div className="sidebar-item-text">
                Upstairs
            </div>
            
            <Toggle />
            </ListItem>
            <ListItem>             
            <ListItemIcon>
                <HomeIcon className="sidebar-item-icon" fontSize="large"/>
            </ListItemIcon>
            <div className="sidebar-item-text">
                Door
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

export default Shutters;