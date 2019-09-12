import React, { Component } from 'react';
import './style.css';

import close from './../../assets/error.svg';

class NewUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: null,
            age: null,
            salary: null,
            name: '',
        }
    }

    updateDetails = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        let { id, age, name, salary} = this.state;
        let { addNewEmployee, closeNewEmployeeModal } = this.props; 
        return(
            <div className="new-employee-wrapper">
                <img src={close} className="close-icon" onClick={closeNewEmployeeModal} />
                <input 
                    type="text"
                    className="new-emp-field"
                    value={id}
                    onChange={this.updateDetails}
                    name="id"
                    placeholder="Enter Employee id"
                />

                <input 
                    type="text"
                    className="new-emp-field"
                    value={age}
                    onChange={this.updateDetails}
                    name="age"
                    placeholder="Enter Employee age"
                />


                <input 
                    type="text"
                    value={salary}
                    className="new-emp-field"
                    onChange={this.updateDetails}
                    name="salary"
                    placeholder="Enter Employee salary"
                />


                <input 
                    type="text"
                    value={name}
                    className="new-emp-field"
                    onChange={this.updateDetails}
                    name="name"
                    placeholder="Enter Employee name"
                />

                <button className="submit" onClick={() => addNewEmployee(id, age, name, salary)}>Submit</button>
            </div>
        );
    }
}

export default NewUser;