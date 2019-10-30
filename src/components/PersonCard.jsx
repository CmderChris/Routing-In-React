import React from "react";
import { Link } from 'react-router-dom';


const PersonCard = props => {
    const { name } =  props.person;
    return (
        <main className='container'>
            <section className='row justify-content-center'>
                <article className="col-md-8">
                    <div className="card mb-4">
                        <div className="card-body text-center">
                            <div className="text-center my-3">
                                <h2>{name}</h2>
                            </div>
                        </div>
                            <div className="card-footer text-center">
                            <Link to={`/people/${props.person.id}`} className="btn btn-outline-info">Additional Info</Link>
                            </div>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default PersonCard;
