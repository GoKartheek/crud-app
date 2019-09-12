import React, { Component } from 'react';
import './style.css';

import fallback from './../../assets/thumbnail.svg';

class User extends Component {
    constructor(props) {
        super(props);
        let { user } = this.props;
        this.state = {
            id: user.id,
            age: user.employee_age,
            salary: user.employee_salary,
            name: user.employee_name,
            isDisabled: true,
        }
    }

    editEmployee = () => {
        this.setState({
            isDisabled: false,
        })
    }

    updateDetails = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        let { user, updateEmployee, deleteEmployee } = this.props;
        let { id, age, salary, name, isDisabled } = this.state;
        return(
            <div className="user-wrapper">
                <img 
                    src={user.profile_image || fallback} 
                    className="profile-img" 
                />

                <input 
                    value={isDisabled ? user.id : id} 
                    className="user-id" 
                    onChange={this.updateDetails}
                    name="id"
                    placeholder="Enter Employee Id"
                    disabled={isDisabled}
                />

                <input 
                    value={isDisabled ? user.employee_age : age} 
                    className="user-age" 
                    onChange={this.updateDetails}
                    name="age"
                    placeholder="Enter employee age"
                    disabled={isDisabled}
                />

                <input 
                    value={isDisabled ? user.employee_salary : salary} 
                    className="user-salary" 
                    onChange={this.updateDetails}
                    name="salary"
                    placeholder="Enter Employee salary"
                    disabled={isDisabled}
                />

                <input 
                    value={isDisabled ? user.employee_name: name} 
                    className="user-name"
                    name="name"
                    onChange={this.updateDetails}
                    placeholder="Enter Employee name"
                    disabled={isDisabled}
                />

                {
                    isDisabled ?
                    <button className="options edit" onClick={() => this.editEmployee()}>Edit</button> :
                    <button 
                        className="options edit" 
                        onClick={() => updateEmployee(id, age, salary, name)}
                    >
                        Save
                    </button>

                }
                <button className="options edit" onClick={() => deleteEmployee(user.id)}>Delete</button>

            </div>
        );
    }
}

export default User;