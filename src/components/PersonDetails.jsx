import React, { Component } from "react";


class FilmDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            people: [] 
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people/" + this.props.match.params.id)
            .then(result => result.json())
            .then(people => {
                this.setState({ people });
            });
    }

    render() {
        return (
            <main className='container'>
            <section className='row justify-content-center'>
                <article className="col-md-8">
                    <div className="card mb-4">
                        <div className="card-body text-center">
                            <div className="text-center mt-3">
                                <h2 className="">{this.state.people.name}</h2>
                            </div>
                        </div>
                        <div className="card-footer text-muted text-center">
                            <p className="mt-2">Age: {this.state.people.age}</p>
                            <p>Gender: {this.state.people.gender}</p>
                            <p>Eye Color: {this.state.people.eye_color}</p>
                            <p>Hair Color: {this.state.people.hair_color}</p>
                        </div>
                    </div>
                </article>
            </section>
        </main>
        );
    }
}

export default FilmDetails;