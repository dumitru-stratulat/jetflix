import React, { useEffect, useState } from 'react';
import { requestMovieDescription } from '../api/movieApi';
import { customStyles } from '../utils/modalStyles';
import Modal from 'react-modal';

interface DescriptionModalProps {
    showModal: boolean,
    handleShowModal: () => void,
    movieId: number
}
export const DescriptionModal: React.FC<DescriptionModalProps> = ({ showModal, handleShowModal, movieId }) => {
    const [movieDetails, setmovieDetails] = useState();
    const getMovieDetails = async (movieId: number) => {
        const { data } = await requestMovieDescription(movieId).get('/')
        setmovieDetails(data)
    }
    useEffect(() => {
        getMovieDetails(movieId);
    }, [movieId])
    return (
        < >
            <Modal
                isOpen={showModal}
                style={customStyles}
                ariaHideApp={false}
            >
                <button onClick={() => handleShowModal()}>Close</button>
                <hr />
                {movieDetails && <div>{movieDetails.title}</div>}
                <hr />
                {movieDetails && <div>{movieDetails.overview}</div>}
                <hr />
                {movieDetails && <div>{movieDetails.release_date}</div>}
                <hr />
                {movieDetails && movieDetails.genres.map((genre: { name: string }, key: number) => <span key={key}> {genre.name} </span>)}
                <hr />
                {movieDetails && <div>Rate: {movieDetails.vote_average}</div>}
                <hr />
                {movieDetails && <div>Duration: {movieDetails.runtime} minutes</div>}
            </Modal>
        </ >
    );
}


