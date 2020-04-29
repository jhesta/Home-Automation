import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ShutterSpeedIcon from '@material-ui/icons/ShutterSpeed';
import SettingsIcon from "@material-ui/icons/Settings";
import Sidebar from "./components/sidebar";
import './components/styles.css';

function onClick()
    {
        
    }

    const items = [
        { name: "home", label: "Home", Icon: HomeIcon },
        "divider",
        {
          name: "lights",
          label: "Lights",
          Icon:  WbIncandescentIcon,
          items: [
            { name: "Turn Off", label: "Turn Off", onClick },
            { name: "All White", label: "All White", onClick },
            { name: "30% White", label: "30% White", onClick }
          ]
        },
        "divider",
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
        "divider",
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
            <div className="background">
                <Sidebar items={items} />
            </div>

            
            </>
         );
           
    }
 
export default Presets;