package com.movies.repository;

import com.movies.model.Movies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MoviesDao extends JpaRepository<Movies,Long> {
    Optional<Movies> findByImdbId(String id);
}