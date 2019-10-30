import React, { Component } from "react";


class FilmDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            films: [] 
        };
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films/" + this.props.match.params.id)
            .then(result => result.json())
            .then(films => {
                this.setState({ films });
            });
    }

    render() {
        return (
            <main className='container'>
            <section className='row justify-content-center'>
                <article className="col-md-8">
                    <div className="card mb-4">
                        <div className="card-body text-center">
                            <div className="text-center">
                                <h3 className="mt-3 mb-4">{this.state.films.title}</h3>
                            </div>
                            <p className="card-text text-justify">{this.state.films.description}</p>
                        </div>
                        <div className="card-footer text-muted text-center">
                            <p>Director: {this.state.films.director}</p>
                            <p>Producer: {this.state.films.producer}</p>
                            <p>Release Date: {this.state.films.release_date}</p>
                            <p>Rotten Tomatoes Score: {this.state.films.rt_score}</p>
                        </div>
                    </div>
                </article>
            </section>
        </main>
        );
    }
}

export default FilmDetails;
