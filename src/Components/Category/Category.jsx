import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CategoryService from '../../Service/CategoryService'
import FavoriteButton from '../../favorites/components/FavoriteButton/FavoriteButton';


const categoryService = new CategoryService();


const Category = () => {
    const params = useParams();

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['category', params.name],
        queryFn: () => categoryService.getCategory(params.name),
    });

    if (isLoading) return <div>Loading</div>
    if (isError) return <div>Error: {error.message}</div>


  return (
    <Container fluid>
        <Link className='quicksand text-white mx-2 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to='/'>Retour aux Catégories</Link>
        <Link className='quicksand text-white mx-2 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to='/listfavoritesmeals'>Recettes Favoris</Link>
        <Card className='my-4 p-0'>
            <Col md={12}>
                <Card.Title className='fs-1 py-4 mb-0 fw-bold merienda text-dark'>{params.name}</Card.Title>
                <div className='py-4'>
                    {data && data.meals.map(meal =>
                        <div className='d-inline-flex flex-row-reverse justify-content-center align-items-center border-bottom border-success mt-2' key={meal.strMeal}>
                            <FavoriteButton meal={meal} />
                            <Link className='link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to={`/meals/${meal.idMeal}`} >
                                <Card.Subtitle className='fs-4 text-dark quicksand'>{meal.strMeal}</Card.Subtitle>
                            </Link>
                            <Col className='mt-2 mb-4 me-3' md={1}>
                                <Image src={meal.strMealThumb} alt={meal.strMeal} fluid/>
                            </Col>
                        </div>
                    )}
                </div>
            </Col>
        </Card>
    </Container>
  )
}

export default Category