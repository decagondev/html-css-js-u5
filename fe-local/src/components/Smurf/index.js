import React from 'react';
import axios from 'axios';
import '../../App.css';

import Form from '../Form';

class Smurf extends React.Component {
    state = {
        isEditing: false,
        smurf: null,
        name: '',
        age: '',
        height: ''
    }

    get id() {
        return this.props.math.params.id;
    }

    componentWillMount() {
        axios.get(`http://localhost:3333/smurfs/${this.id}`)
        .then(res => {
            this.setState({
                smurf: res.data,
                name: res.data.name,
                age: res.data.age,
                height: res.data.height
            });
        })
        .catch(err => console.log(err));
    }

    toggleEditMode = e => {
        e.preventDefault();

        if (this.state.name === "") {
            axios.get(`http://localhost:3333/smurfs/${this.id}`)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    age: res.data.age,
                    height: res.data.height
                });
            })
            .catch(err => console.log(err));

        }

        this.setState({isEditing: true });
    }

 
    handleEditCancel = e => {
        e.preventDefault();

        this.setState({ isEditing: false });
    }

    handleEditSmurf = e => {
        e.preventDefault();

        axios.put(`http://localhost:3333/smurfs/${this.id}`)
        .then(res => {
            const smurf = res.data.find(smurf => smurf.id === Number(this.id));
            this.setState({ isEditing: false, smurf })
        })
        .catch(err => consdole.log(err));
    }

    handleDelete = e => {
        e.preventDefault();

        axios.delete(`http://localhost:3333/smurfs/${this.id}`)
        .then(res => {
            this.setState({ smurf: null });
            this.props.handleUpdateSmurfs(res.data, Number(this.id));
            this.props.history.push("/");
        })
        .catch(err => console.log(err));
    }



    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        if (!this.state.smurf) {
            return (
                <div>Loading Smurf...</div>
            )
        }

        if (this.state.isEditing) {
            return (
                <Form name={this.state.name}
                      age={this.state.age}
                      height={this.state.height}
                      handleInputChange={this.handleInputChange}
                      handleCancel={this.handleEditCancel}
                      handleSmurfSubmit={this.handleEditSmurf} />
            )
        }

        return (
            <div className="smurf-page">
                <h3>{this.state.name}</h3>
                <strong>{this.state.height} cm tall</strong>
                <p>{this.state.age} years old</p>

                <div className="button-wrapper">
                    <button onClick={this.toggleEditMode}>Edit</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
        )

    }
};

Smurf.defaultProps = {
    name: '',
    height: '',
    age: ''
};


export default Smurf;