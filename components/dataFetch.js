import React from 'react';
import './styles.css';

class DataFetch extends React.Component {
    state = { 
        loading:true,
        status:null
     }

     async componentDidMount(){
        const conn="https://192.168.2.120:8080/json/system/login?user=dssadmin&password=momo2103";
        const response= await fetch(conn);
        const data= await response.json();
        console.log(data);
        this.setState({status:data.result.token, loading:false});
    }

    render() { 
        return (  
        <> 
            <div className="header">
                <h1>Home Automation</h1>
                <button onClick={this.offButton} className="btn btn-secondary btn-sm">
                    Create New Token
                </button>
            </div>

            <div className="header">
                {this.state.status}
            </div>
            
        </>
        );
    }
}
 
export default DataFetch;
