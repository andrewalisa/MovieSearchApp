import React from 'react';

const searchMovies = async (e) =>{
    e.preventDefault();
    console.log(process.env.REACT_APP_SECRET_CODE);

    
}


export default function SearchMovies(){
    return (
        <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query"> Movie Name</label>
            <input className="input" type="text" name="query" htmlFor="query" placeholder="i.e. Toy Story" />
            <button className="button" type="submit">Search</button>
        </form>
    )
}