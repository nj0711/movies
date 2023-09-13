package com.movies.services;

import com.movies.model.Movies;
import com.movies.repository.MoviesDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class MovieServiceImpl implements MovieService{
    @Autowired
    private MoviesDao moviesDao;
    @Override
    public List<Movies> getAllMovies() {
        return this.moviesDao.findAll();
    }

    @Override
    public List<Movies> addMovies(List<Movies> list) {
        return this.moviesDao.saveAll(list);
    }

    @Override
    public Optional<Movies> getMovieById(long l) {
        return this.moviesDao.findById(l);
    }

    @Override
    public Optional<Movies> getMovieByImdbId(String id) {
        return this.moviesDao.findByImdbId(id);
    }
}