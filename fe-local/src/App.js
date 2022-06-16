import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import SmurfList from './components/SmurfList';
import Form from './components/Form';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };
  }

  componentWillMount() {
    axios.get("http://localhost:3333/smurfs")
    .then(res => {
      this.setState({ smurfs: res.data })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    const smurfs = this.state.smurfs.slice().reverse();
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={ props => <SmurfList smurfs={this.state.smurfs} />} />

        <Switch>
          <Route path="/smurfs/add" render={ props => <Form />} />
        </Switch>
      </div>
    )
  }

}

export default withRouter(App);
