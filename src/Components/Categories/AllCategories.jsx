import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import CategoriesService from '../../Service/CategoriesService'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const categoriesService = new CategoriesService();

const AllCategories = () => {
    const {isLoading, isError, data, error} = useQuery({
        queryKey: ['categories'],
        queryFn: () => categoriesService.getAllCategories(),
    });

    if (isLoading) return <div>Loading</div>
    if (isError) return <div>Error: {error.message}</div>

  return (
    <Container>
        <h1 className='fs-1 fw-bold text-uppercase quicksand text-white'>Recipe Book</h1>
        <Link className='quicksand text-white mx-2 link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to='/listfavoritesmeals'>Recettes Favoris</Link>
        <Card className='mt-5 p-0' md={12}>
            <Card.Title className='fs-1 px-5 pt-4 pb-2 fw-bold merienda text-dark border-bottom border-dark'>All Categories</Card.Title>
            <div className='my-2'>
                {data && data.categories.map(category =>
                    <Link className='link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to={`/categories/${category.strCategory}`} key={category.idCategory}>
                        <Card.Subtitle className='py-3 fs-5 fw-bolder text-dark quicksand'>{category.strCategory}</Card.Subtitle>
                    </Link>
                )}
            </div>
        </Card>
    </Container>
  )
}

export default AllCategories