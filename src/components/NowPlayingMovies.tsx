import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { requestNowPlayingMovies } from '../api/movieApi';
import { responsive } from '../utils/responsive';
import { MovieCard } from './MovieCard';

export const NowPlayingMovies: React.FC = () => {
    const [nowPlayingMovies, setnowPlayingMovies] = useState([]);
    const getMovies = async () => {
        const { data } = await requestNowPlayingMovies.get('/');
        setnowPlayingMovies(data.results);
    }
    useEffect(() => {
        getMovies();
    }, [])
    return (
        <div>
            <Carousel responsive={responsive} className="carousel"  >
                {nowPlayingMovies.map((item, key) => <MovieCard item={item} key={key} />)}
            </Carousel>
        </div>
    );
}