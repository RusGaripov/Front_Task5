import React, { Component } from "react"

class RegistrationForm extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            middleName: "",
            gender: "",
            favTeam: "Brazil",
            eMail: "",
            keyWord: "",
            isAgreed: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('/api/register', {
            method: 'POST',
            body: data,
        });
        console.log('form submitted and email value is', this.state.firstName);
    }

    handleEmailChange(event) {
        console.log('handleEmailChange', this);
        this.setState({ firstName: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="regForm">
                <input
                    className="rForm"
                    type="text"
                    value={this.state.firstName}
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.handleChange}
                />
                <br />
                <input
                    className="rForm"
                    type="text"
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                />
                <br />
                <input
                    className="rForm"
                    type="text"
                    value={this.state.middleName}
                    name="middleName"
                    placeholder="Middle Name"
                    onChange={this.handleChange}
                />
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> Male
</label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.isFriendly}
                        onChange={this.handleChange}
                    /> Female
</label>
                <br />
                <label>Favorite Team:</label>
                <select
                    className="country"
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favTeam"
                >
                    <option className="countries" value="Brazil">Brazil</option>
                    <option className="countries" value="Italy">Italy</option>
                    <option className="countries" value="Spain">Spain</option>
                    <option className="countries" value="Germany">Germany</option>
                    <option className="countries" value="Argentina">Argentina</option>
                </select>

                <br />
                <input
                    className="rForm"
                    type="text"
                    value={this.state.eMail}
                    name="eMail"
                    placeholder="E-mail"
                    onChange={this.handleChange}
                />
                <br />
                <input
                    className="rForm"
                    type="text"
                    value={this.state.keyWord}
                    name="keyWord"
                    placeholder="Keyword"
                    onChange={this.handleChange}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isAgreed"
                        checked={this.state.isAgreed}
                        onChange={this.handleChange}
                    /> I agree to the processing of personal data
</label>

                {
                    /**
                     * Другие полезные элементы форм:
                     * 
                     * <textarea /> 
                     * <input type="checkbox" />
                     * <input type="radio" />
                     * <select> и <option> 
                     */
                }
                <br/>
                <button className="but">Submit</button>
            </form>

        )
    }
}

export default RegistrationForm