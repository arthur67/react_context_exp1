import React , {useContext} from 'react'
import {MovieContext} from './MovieContext'

const Nav = () => {
    const [movies] = useContext(MovieContext);
    return (
        <nav>
            <h3>Context Experiment</h3>
            <p>List of movies: {movies.length}</p>
        </nav>
    )
}
export default Nav;