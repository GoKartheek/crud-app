import React from 'react';
import './style.css';
import User from './../User';
import NewUser from './../NewUser';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            showNewEmployee: false,
        }
    }

    componentDidMount() {
        fetch(`	http://dummy.restapiexample.com/api/v1/employees`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                employees: data,
            })
        })
    }

    updateEmployee = (id, age, salary, name) => {
        let data = {name, salary, age}
        let url = `http://dummy.restapiexample.com/api/v1/update/${id}`;
        fetch(url, {
            credentials: 'same-origin', // 'include', default: 'omit'
            method: 'PUT', // 'GET', 'PUT', 'DELETE', etc.
            body: JSON.stringify(data),
            headers: new Headers({
            'Content-Type': 'application/json'
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }

    deleteEmployee = (id) => {
        let url = `http://dummy.restapiexample.com/api/v1/delete/${id}`;
        fetch(url, {
            credentials: 'same-origin', // 'include', default: 'omit'
            method: 'DELETE', // 'GET', 'PUT', 'DELETE', etc.
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
    }

    showNewEmployeeModal = () => {
        this.setState({
            showNewEmployee: true
        }, () => {
            window.scrollTo(0,0)
        })

    }

    closeNewEmployeeModal = () => {
        this.setState({
            showNewEmployee: false,
        })
    }

    addNewEmployee = (id, age, name, salary) => {
        let data = {
            id: +id,
            name, 
            salary: +salary, 
            age: +age,
        }
        let url = `	http://dummy.restapiexample.com/api/v1/create`;
        fetch(url, {
            credentials: 'same-origin', // 'include', default: 'omit'
            method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
            body: JSON.stringify(data),
            headers: new Headers({
            'Content-Type': 'application/json'
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            debugger;
        })
    }

    


    render() {
        let { employees,  showNewEmployee} = this.state;
        return(
            <div className="home-wrapper">
                <div className="header">
                    React CRUD Example
                </div>

                <div className="users-block">
                    {
                        employees.map((employee, index) => {
                            return(
                                <User
                                    user={employee} 
                                    key={`user-${index}`} 
                                    updateEmployee={this.updateEmployee}
                                    deleteEmployee={this.deleteEmployee}
                                />
                            );
                        })
                    }
                </div>
                <div className="add-user-block">
                    <button onClick={this.showNewEmployeeModal}>Add employee</button>
                </div>
                {
                    showNewEmployee && 
                    <NewUser 
                        addNewEmployee={this.addNewEmployee}
                        closeNewEmployeeModal={this.closeNewEmployeeModal}
                    />
                }
            </div>
        );
    }
}

export default Home;