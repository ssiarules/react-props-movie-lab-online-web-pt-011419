import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return movieData.map((data, index)=> (
      <MovieCard key={index} title={data.title} IMDBRating={data.IMDBRating} genres={data.genres} posters={data.poster} />

    ));
  };

  render() {
    return  <div id="movie-showcase"> {this.generateMovieCards()} </div>;

  }
}
