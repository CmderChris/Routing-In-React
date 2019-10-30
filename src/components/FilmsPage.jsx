import React from "react";
import FilmCard from "./FilmCard";


class FilmsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        };
    }

    async componentDidMount() {
        try {
            let r = await fetch('http://ghibliapi.herokuapp.com/films');
            let films = await r.json();
            this.setState({ films });
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        return (
            <>
            {this.state.films.map(film => {
                    return (
                    <FilmCard key={film.id} film={film} />
                    );
                })}
            </>
        )
    }

}

export default FilmsPage;