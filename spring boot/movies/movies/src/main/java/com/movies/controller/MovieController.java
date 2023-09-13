package com.movies.controller;

import com.movies.model.Movies;
import com.movies.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/movie")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping("/getall")
    private ResponseEntity<List<Movies>> getMovies(){
        return ResponseEntity.status(HttpStatus.FOUND).body(this.movieService.getAllMovies());
    }

    @GetMapping("/getbyid")
    private ResponseEntity<Optional<Movies>> getMovieById(@RequestParam String id){
        return ResponseEntity.status(HttpStatus.OK).body(this.movieService.getMovieById(Long.parseLong(id)));
    }

    @GetMapping("/getbyimdbid")
    private ResponseEntity<Optional<Movies>> getMovieByImdbId(@RequestParam String id){
        return ResponseEntity.status(HttpStatus.OK).body(this.movieService.getMovieByImdbId(id));
    }

    @PostMapping("/addall")
    private ResponseEntity<List<Movies>> addMovies(@RequestBody List<Movies> list){
        return ResponseEntity.status(HttpStatus.CREATED).body(this.movieService.addMovies(list));
    }
}