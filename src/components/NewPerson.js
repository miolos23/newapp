import React, { Component } from "react";
import "../css/NewPerson.css";

class NewPerson extends Component {
    state = {
        name: "",
        job: "",
        gender: ""
    }

    setValue = e => this.setState({ [e.target.id]: e.target.value })


    save = e => {
        e.preventDefault();
        this.props.insertNewPerson(this.state);
    }

    render() {
        return (
            <div>
                {/* <h1>Name: {this.state.name}</h1> */}
                <form action="" onSubmit={this.save}>
                    <input className="field" id="name" onChange={this.setValue} type="text" placeholder="name" /><br />
                    <input className="field" id="job" onChange={this.setValue} type="text" placeholder="job" /><br />
                    <input className="field" id="gender" onChange={this.setValue} type="text" placeholder="gender" /><br />
                    <button className="btn" type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default NewPerson;