import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import MealService from '../../Service/TheMealService'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const mealService = new MealService();

const AllCategories = () => {
    const {isLoading, isError, data, error} = useQuery({
        queryKey: ['category'],
        queryFn: () => mealService.getAllCategories(),
    });

    if (isLoading) return <div>Loading</div>
    if (isError) return <div>Error: {error.message}</div>

  return (
    <Container>
        <Card>
            <Card.Title className='fs-1 text-uppercase fw-bold'>All Categories</Card.Title>
            {data && data.categories.map(category =>
                <Link to={`/categories/${category.strCategory}`} key={category.idCategory}>
                    <Card.Subtitle className='my-2 fs-5 fw-bolder'>{category.strCategory}</Card.Subtitle>
                </Link>
            )}
        </Card>
    </Container>
  )
}

export default AllCategories