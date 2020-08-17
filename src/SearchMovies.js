import React from 'react';

export default function SearchMovies(){
    return (
        <form className="form">
            <label className="label" htmlFor="query"> Movie Name</label>
            <input className="input" type="text" name="query" htmlFor="query" placeholder="i.e. Toy Story" />
            <button className="button" type="submit">Search</button>
        </form>
    )
}