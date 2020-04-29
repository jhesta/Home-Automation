import React from 'react';
import HomeIcon from "@material-ui/icons/Home";
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import Sidebar from './sidebar';



class Buttons extends React.Component {
    state = {  }
    render() { 
        return ( 
            <>
            <React.Fragment>
            <div className='card'>
                <div className='card-body'>
                    <h3 className='card-title'>Lights</h3>
                    <button onClick='' className="btn btn-secondary btn-sm">Turn Off</button>
                    <br />
                    <button onClick='' className="btn btn-secondary btn-sm">All White</button>
                    <br />
                    <button onClick='' className="btn btn-secondary btn-sm">30% White</button>
                    <br />
                </div>

            </div> 
            </React.Fragment>
            </>
         );
    }
}
 
export default Buttons;