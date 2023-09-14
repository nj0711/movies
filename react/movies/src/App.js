import './App.css';
import Home from './component/home/Home';
import { Routes, Route } from 'react-router-dom';
import Layout from "./component/Layout"
import axios from "axios";
import base_url from "./api/axiosConfig";
import { useState, useEffect } from "react";
import Header from './component/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [movies,setMovies]=useState([]);

  const getAllMovies = () => {
    axios.get(`${base_url}/getall`)
        .then((response) => {
            setMovies(response.data);
        })
        .catch((err) => {
            console.log(err)
        })
}

useEffect(() => {
    getAllMovies()
}, []);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies}/>}>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
