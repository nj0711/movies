import React from 'react'
import '../hero/Hero.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Paper } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Hero({ movies }) {

  return (
    <div className='movie-carousel-container'>
      <Carousel>
        {
          movies.map((movie) => {
            return (
              <Paper>
                <div className='movie-card-container'>
                  <div className='movie-card' style={{ "--img": `url(${movie.backdrops[1]})` }}>
                    <div className='movie-detail'>
                      <div className='movie-poster'>
                        <img src={movie.poster} alt='Movie poster' />
                      </div>
                      <div className='movie-title'>
                        <h4>{movie.title}</h4>
                      </div>
                      <div className='movie-buttons-container'>
                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                        <div className='play-button-icon-container'>
                          <FontAwesomeIcon className='play-button-icon' icon={faCirclePlay} />
                        </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            );
          })
        }
      </Carousel>
    </div>
  )
}

export default Hero
