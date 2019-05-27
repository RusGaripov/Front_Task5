import React, { Component } from "react"

class Users extends Component {
    constructor() {
        super()
        this.state = {
            usersTable: []
        }
    }

    componentDidMount(event) {
        fetch('/api/users')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    // eslint-disable-next-line no-restricted-globals
                    location.href = '/about'
                    return { usersTable: [] }
                }
            })
            .then(json => {
                console.log(JSON.stringify(json));
                this.setState({ usersTable: json.usersTable })
            });
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th class="o">First Name</th>
                        <th class="o">Last Name</th>
                        <th class="o">Middle Name</th>
                        <th class="o">Gender</th>
                        <th class="o">Favorite Team</th>
                        <th class="o">E-Mail</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.usersTable.map(u => (
                        <tr>
                            <td class="o">{u.firstName}</td>
                            <td class="o">{u.lastName}</td>
                            <td class="o">{u.middleName}</td>
                            <td class="o">{u.gender}</td>
                            <td class="o">{u.favTeam}</td>
                            <td class="o">{u.eMail}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default Users