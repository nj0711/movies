import React from 'react'
import '../hero/Hero.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Paper } from '@mui/material'


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
