import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { requestUpComingMovies } from '../api/movieApi'
import { responsive } from '../utils/responsive'
import { MovieCard } from './MovieCard'

export const UpComingMovies: React.FC = () => {
    const [upComingMovies, setupComingMovies] = useState([]);
    const getMovies = async () => {
        const { data } = await requestUpComingMovies.get('/')
        setupComingMovies(data.results)
    }
    useEffect(() => {
        getMovies();
    }, [])
    return (
        <div >
            <Carousel responsive={responsive} className="carousel"  >
                {upComingMovies.map((item, key) => <MovieCard item={item} key={key} />)}
            </Carousel>
        </div>
    );
}


