import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import MealService from '../../Service/TheMealService'

const mealService = new MealService();


const Category = () => {
    const params = useParams();

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['category', params.name],
        queryFn: () => mealService.getCategory(params.name),
    });

    if (isLoading) return <div>Loading</div>
    if (isError) return <div>Error: {error.message}</div>

  return (
    <Container fluid>
        <Link to='/'>Retour aux Catégories</Link>
        <Card>
            <Col md={12}>
                <Card.Title className='fs-1 text-uppercase fw-bold'>{params.name}</Card.Title>
                {data && data.meals.map(meal =>
                    <Row className='d-flex flex-row' key={meal.strMeal}>
                        <Link to={`/meals/${meal.idMeal}`} >
                            <Card.Subtitle className='fs-5'>{meal.strMeal}</Card.Subtitle>
                        </Link>
                        <Col md={2}>
                            <Image src={meal.strMealThumb} alt={meal.strMeal} fluid thumbnail/>
                        </Col>
                    </Row>
                )}
            </Col>
        </Card>
    </Container>
  )
}

export default Category