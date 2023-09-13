import React from 'react'
import { useSelector } from 'react-redux'
import { favoritesSelector } from '../../store/favoritesSelectors'
import { Link } from 'react-router-dom';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const ListFavoritesMeals = () => {
    const favorites = useSelector(favoritesSelector);

  return (
    <Container fluid>
        <Link className='quicksand text-white mx-2 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to='/'>Retour aux Catégories</Link>
        <Card className='my-4 p-0'>
            <Card.Title className='fs-1 py-4 mb-0 fw-bold merienda text-dark'>Recettes Favorites</Card.Title>
            <div className='my-4 p-0'>
                {favorites.map(meal => 
                        <div key={meal.idMeal}
                            className='d-inline-flex flex-row-reverse justify-content-center align-items-center border-bottom border-success mt-2'>
                             <Link className='link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to={`/meals/${meal.idMeal}`} >
                                <Card.Subtitle className='fs-4 text-dark quicksand'>{meal.strMeal}</Card.Subtitle>
                            </Link>
                            <Col className='mt-2 mb-4 me-3' md={1}>
                                <Image src={meal.strMealThumb} alt={meal.strMeal} fluid/>
                            </Col>
                            <FavoriteButton meal={meal}/>
                        </div>
                    )}
            </div>
        </Card>
    </Container>
  )
}

export default ListFavoritesMeals