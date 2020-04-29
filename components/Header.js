import React, { Component } from 'react';
import './styles.css';
import DataFetch from './dataFetch';
import hd from './images/h1.jpg';

class Header extends Component {   
    render() { 
        return ( 
            <> 
            <div>
            <div className="header">
                <img src={hd} />
                <h1>Home Automation</h1>
            </div>
                <DataFetch />
            </div>       
            </>
         );
    }
}

 
export default Header;