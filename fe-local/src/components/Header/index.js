import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

const Header = props => {
    return (
      <div className="header">
        <div className="home-link"><Link to="/">Home</Link></div>
        <div className="header-title"><h2>Welcome to the Smurf Database</h2></div>
        <div className="add-smurf-link"><Link to="/smurfs/add">Add Smurf</Link></div>
      </div>
    )
}

export default Header;