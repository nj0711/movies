package com.movies.controller;

import com.movies.model.Review;
import com.movies.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/review")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;


    @GetMapping("/allreview")
    private ResponseEntity<List<Review>> getAll(){
        return ResponseEntity.status(HttpStatus.OK).body(this.reviewService.getAll());
    }

    @PostMapping("/addreview")
    private ResponseEntity<Review> addReview(@RequestBody Map<String,String> payload){
        return ResponseEntity.status(HttpStatus.OK).body(this.reviewService.addReview(payload.get("review"),payload.get("imdbid")));
    }
}