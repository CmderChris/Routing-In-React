import React from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import FilmsPage from "./FilmsPage";
import FilmDetails from "./FilmDetails";
import PeoplePage from "./PeoplePage";
import PersonDetails from "./PersonDetails";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            films: [],
            people: []
        };
    }

    render() {
        return (
            <BrowserRouter>
                <main className="container">
                <img className="w-75 mx-auto d-block mt-5 mb-5" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="logo"/>
                <NavBar />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/films" component={FilmsPage} />
                        <Route exact path="/films/:id" component={FilmDetails} />
                        <Route exact path="/people" component={PeoplePage} />
                        <Route exact path="/people/:id" component={PersonDetails} />
                    </Switch>
                </main>
            </BrowserRouter>
        )

    }

}

export default App;