import React from 'react'
import { useEffect, useRef } from 'react'
import api from '../../api/axiosConfig'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import ReviewForm from './ReviewForm'

function Reviews({ getMovieData, movie, reviews, setReviews }) {

    // const revText = useRef();
    // let params = useParams([]);
    // const movieId = params.movieId;

    // const addReview = (e) => {
    //     e.preventDefault();

    // try {
    //     const rev = revText.current;
    //     const response = api.post("/review/add", { reviewBody: rev.value, imdbId: movieId });

    //     const updateReview = [...reviews, { body: rev.value }];

    //     rev.value = "";
    //     setReviews(updateReview);
    // } catch (e) {
    //     console.log(e);
    // }

    // }

    // useEffect(() => {
    //     getMovieData(movieId);
    // }, [])

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Hello</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* <img src={movie?.poster} alt='Movie Poster' /> */}
                    <img src="https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" alt='Movie Poster' />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    {/* <ReviewForm handleSubmit={addReview} revText={revText}  /> */}
                                    <ReviewForm />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {
                        reviews.map((r) => {
                            return (
                                <>
                                    <Row>
                                        <Col>
                                            {/* {r.body} */}
                                            rBody
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews
