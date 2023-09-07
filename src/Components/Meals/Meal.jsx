import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import RecipeService from '../../Service/RecipeService'
import Accordeon from '../Accordeon/Accordeon';

const recipeService = new RecipeService();

const Meal = () => {
  const params = useParams();

  const { isLoading, isError, data, error } = useQuery({
      queryKey: ['meal', params.id],
      queryFn: () => recipeService.getMeal(params.id),
  });

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error: {error.message}</div>


  return (
    <Container fluid>
        <Link className='quicksand text-white link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to='/'>Retour aux Catégories</Link>
        <Card className='my-4'>
          <Col md={12}>
            {data && data.meals.map(info =>
                <Col key={info.idMeal}>
                  <Card.Title className='fs-1 fw-bold merienda text-black'>{info.strMeal}</Card.Title>
                  <Card.Text className='quicksand fs-5 text-success'>{info.strCategory}</Card.Text>
                  <Image src={info.strMealThumb} alt={info.strMeal} fluid thumbnail />
                  <Accordeon info={info}></Accordeon>
                </Col>
            )}
          </Col>
        </Card>
    </Container>
  )
}

export default Meal