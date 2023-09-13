package com.movies.services;

import com.movies.model.Movies;
import com.movies.model.Review;
import com.movies.repository.MoviesDao;
import com.movies.repository.ReviewDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ReviewServiceImpl implements ReviewService{

    @Autowired
    private ReviewDao reviewDao;

    @Autowired
    private MoviesDao moviesDao;

    public Review addReview(String reviewBody, String id){
        Movies m = this.moviesDao.findByImdbId(id).orElse(null);

        Review r = new Review();
        r.setBody(reviewBody);
        r.setDate(new Date());
        this.reviewDao.save(r);

        List<Review> l = m.getReviewIds();
        l.add(r);
        if(m!= null){
            m.setReviewIds(l);
            this.moviesDao.save(m);
        }
       return r;
    }

    @Override
    public List<Review> getAll() {
        return this.reviewDao.findAll();
    }
}