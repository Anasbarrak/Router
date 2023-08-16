import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Description from './Description';

function MovieCard({ movie }){
  console.log(movie)
    return (
      <Card style={{ width: '14rem', padding: '10px' }}>
        <Card.Img variant="top" src={movie.image}
         style={{height:"320px"}}
         />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{Description}</Card.Text>
          <Button variant="primary">Go to trailer</Button>
          <Link to='/Description'>
            <Description description={movie.description} trailer={movie.trailerURL}/>
          </Link>
        </Card.Body>
      </Card>
    );
}
export default MovieCard