package com.movies.services;

import com.movies.model.Review;

import java.util.List;

public interface ReviewService {
    Review addReview(String reviewBody, String id);

    List<Review> getAll();
}