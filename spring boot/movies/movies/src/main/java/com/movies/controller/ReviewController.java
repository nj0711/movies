package com.movies.controller;

import com.movies.model.Review;
import com.movies.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    private ResponseEntity<Review> addReview(@RequestBody Review review,@RequestParam String id){
        return ResponseEntity.status(HttpStatus.OK).body(this.reviewService.addReview(review,id));
    }
}