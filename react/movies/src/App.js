import './App.css';
import Home from './component/home/Home';
import { Routes, Route } from 'react-router-dom';
import Layout from "./component/Layout"
import axios from "axios";
import base_url from "./api/axiosConfig";
import { useState, useEffect } from "react";
import Header from './component/header/Header';
import Trailer from './component/trailer/Trailer';
import Reviews from './component/review/Reviews';
import NotFound from './component/notFound/NotFound';
import api from './api/axiosConfig'

function App() {

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getAllMovies = () => {
    axios.get(`${base_url}/getall`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getMoviesData = (movieId) => {
    const response = api.get(`${base_url}/review/${movieId}`);
    const singleMovie = response.data;

    setMovie(singleMovie);
    setReviews(singleMovie.reviews)
  }

  useEffect(() => {
    getAllMovies()
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home movies={movies} />} />
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
          <Route path="/review/:movieId" element={<Reviews getMovieData={getMoviesData} movie={movie} reviews={reviews} setReviews={setReviews} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
