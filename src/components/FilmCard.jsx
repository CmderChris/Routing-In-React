import React from "react";
import { Link } from 'react-router-dom';


const FilmCard = props => {
    const { title } = props.film;
    return (
        <main className='container'>
            <section className='row justify-content-center'>
                <article className="col-md-8">
                    <div className="card mb-4">
                        <div className="card-body text-center">
                                <h2 className="mt-3 mb-4">{title}</h2>
                        </div>
                        <div className="card-footer text-muted text-center">
                            <Link to={`/films/${props.film.id}`} className="btn btn-outline-info">Additional Info</Link>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    )

}


export default FilmCard;







