import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Profile = (props) => {
    
    ////////////////new line//////////////////////////////////
    const [roomName, setRoomName] = React.useState("");
///////////////////////////////////////////////////////
    
console.log(props);
     const userData = props.user ? 
    (<div>
        <h1>Profile</h1>
        <p><strong>Name:</strong> {props.user.name}</p> 
        <p><strong>Email:</strong> {props.user.email}</p> 
        {/* <p><strong>ID:</strong> {props.user.id}</p>  */}
    </div>) : <h4>Loading...</h4>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
                
           
            </div>
        );
    };
    
 

    return (
        <div>
            { props.user ? userData : errorDiv() }
            <Switch>
     
      </Switch>
  
 
        </div>
    );
}

export default Profile;