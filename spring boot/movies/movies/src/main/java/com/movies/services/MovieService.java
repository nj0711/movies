package com.movies.services;

import com.movies.model.Movies;

import java.util.List;
import java.util.Optional;

public interface MovieService {
    List<Movies> getAllMovies();

    List<Movies> addMovies(List<Movies> list);

    Optional<Movies> getMovieById(long l);

    Optional<Movies> getMovieByImdbId(String id);
}