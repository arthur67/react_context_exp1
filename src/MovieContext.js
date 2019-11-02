import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies,setMovies] = useState([
        {
            name: 'Terminator',
            price: '$10',
            id: 23124
        },
        {
            name: 'Rambo',
            price: '$10',
            id: 2566124
        },
        {
            name: 'Dirty Harry',
            price: '$7',
            id: 23542
        }
    ]);

    return (
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}