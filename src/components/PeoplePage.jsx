import React from "react";
import PersonCard from "./PersonCard";


class PeoplePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        };
    }

    async componentDidMount() {
        try {
            let r = await fetch('http://ghibliapi.herokuapp.com/people');
            let people = await r.json();
            this.setState({ people });
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        return (
            <>
            {this.state.people.map(person => {
                    return (
                    <PersonCard key={`person-${person.id}`} person={person} />
                    );
                })}
            </>
        )
    }

}

export default PeoplePage;