import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ShutterSpeedIcon from '@material-ui/icons/ShutterSpeed';
import SettingsIcon from "@material-ui/icons/Settings";
import Sidebar from "./sidebar";

class Presets1 extends React.Component {
    state = { 
        status:null
     }

     async componentDidMount(){
        const conn="https://192.168.2.120:8080/json/system/login?user=dssadmin&password=momo2103";
        const response= await  fetch(conn);
        const data= await  response.json();
        console.log(data);
        this.setState({status:data.result.token});//token or ok
     }
    }
    function presetWorking(){
        if (this.state.status==='true') 
            return window.alert('Success');
        else
            return window.alert('Not Success');
      }   

      
    function onClick()
    {

    }

    const items = [
        { name: "home", label: "Home", Icon: HomeIcon },
        {
          name: "lights",
          label: "Lights",
          Icon:  WbIncandescentIcon,
          items: [
            { name: "Turn Off", label: "Turn Off", presetWorking },
            { name: "All White", label: "All White", onClick },
            { name: "30% White", label: "30% White", onClick }
          ]
        },
        {
          name: "shutters",
          label: "Shutters",
          Icon: ShutterSpeedIcon,
          items: [
            { name: "Upstairs Down", label: "Upstairs Down", onClick },
            { name: "Upstairs Up", label: "Upstairs Up", onClick },
            { name: "Doors Up", label: "Doors Up", onClick },
            { name: "Doors Down", label: "Doors Down", onClick }
          ]
        },
        {
          name: "heaters",
          label: "Heaters",
          Icon: AcUnitIcon,
          items: [
            { name: "Turn Off", label: "Turn Off", onClick },
            { name: "Set to 20°", label: "Set to 20°", onClick },
            { name: "Set to 22°", label: "Set to 22°", onClick },
            { name: "Set to 25°", label: "Set to 25°", onClick }
          ]
        },
      
        "divider",
        {
          name: "settings",
          label: "Settings",
          Icon: SettingsIcon,
        }
      ];
    
function Presets() {
    return ( 
            <>
                <Sidebar items={items} />
            </>
         );
           
    }
 
export default Presets;