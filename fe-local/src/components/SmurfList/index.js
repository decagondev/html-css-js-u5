import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';

const SmurfList = props => {
    const smurfs = props.smurfs.slice().reverse();
    return (
      <div className="App">
        {   smurfs.map(smurf => {
            return (
              <Link to={`/smurfs/${smurf.id}`} key={Math.random()}>
                <div className="smurf-card">{smurf.name}</div>
              </Link>
            );
          })}
      </div>
    )
}

SmurfList.defaultProps = {
  smurfs: [],
};

export default SmurfList;