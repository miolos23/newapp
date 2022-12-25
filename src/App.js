import React, { Component } from "react";
import PersonsList from "./components/PersonsList";
import NewPerson from "./components/NewPerson";
import "./App.css"

class App extends Component {
    state = {
        name: "Danilo",
        data: [
            { name: "Danilo", job: "developer", gender: "male", id: 1 },
            { name: "Ivan", job: "gemer", gender: "male", id: 2 },
            { name: "Sofija", job: "gemer", gender: "female", id: 3 }
        ]
    }

    insertNewPerson = (person) => {
        person.id = Math.floor(Math.random() * (10000 - 10) + 10);
        // let dataCopy = this.state.data.concat(person);
        this.setState({
            data: [...this.state.data, person]
        })
    }

    deletePerson = (id) => {
        let filteredData = this.state.data.filter(el => {
            return el.id !== id;
        })
        this.setState({
            data: filteredData
        })
    }

    render() {
        return (
            <div>
                <PersonsList deletePerson={this.deletePerson} data={this.state.data} />
                <NewPerson insertNewPerson={this.insertNewPerson} />
            </div>

        )
    }
}

export default App;