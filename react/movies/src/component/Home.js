import axios from "axios";
import React from "react";
import base_url from "../api/axiosConfig";
import { useState, useEffect } from "react";

const Home = () => {

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


    const [movies, setMovies] = useState([]);



    return (
        <div>
            {
                movies.length > 0 ? movies.map((list) => <h1>list.title</h1>) : <h1>null</h1>
            }
        </div>
    );
}
export default Home;