import React, { Component } from 'react';
import './styles.css';
import DataFetch from './dataFetch';

class Header extends Component {   
    render() { 
        return ( 
            <> 
            <div>
                <DataFetch />
            </div>       
            </>
         );
    }
}

 
export default Header;