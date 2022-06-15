import React from 'react';

import '../../App.css';

const SmurfList = props => {
    const smurfs = props.smurfs.slice().reverse();
    return (
      <div className="App">
        {   smurfs.map(smurf => {
            return (
              <div className="smurf-card" key={Math.random()}>
                <h1>{ smurf.name }</h1>
              </div>
            );
          })}
      </div>
    )
}

export default SmurfList;