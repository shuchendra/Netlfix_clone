import React, { useEffect, useState } from 'react';
import "./Row.css";
import axios from "./axios";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl])

    const opts ={
        height: "390",
        width: "100%",
        playerVars: {
            autoplay:1,
        }
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            // Use 'title' or 'original_title' depending on the data available from your API
            const movieName = movie.title || movie.name || "";
            movieTrailer(movieName)
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => {
                console.error('Error fetching trailer:', error);
                setTrailerUrl('');
            });
        }
    };
    

  return (
    <div className="row">
        <h2>{title}</h2>

        <div className='row__posters'>
            {movies.map(
                (movie) => 
                ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                    <img 
                        className= {`row__poster ${isLargeRow && "row__posterLarge"}`}
                        key = {movie.id}
                        onClick={() => handleClick(movie)}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} 
                        alt={movie.name} 
                    />
                )
            )}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div> 
  );
}

export default Row;