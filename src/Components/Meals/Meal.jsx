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
import Accordeon from '../Accordion/Accordion';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const mealService = new MealService();

const Meal = () => {
  const params = useParams();

  const { isLoading, isError, data, error } = useQuery({
      queryKey: ['meal', params.name],
      queryFn: () => mealService.getMeal(params.name),
  });

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error: {error.message}</div>


  return (
    <Container fluid>
        <Link to='/'>Retour aux Catégories</Link>
        <Card>
          <Col md={12}>
            {data && data.meals.map(info =>
                <Col key={info.idMeal}>
                  <Card.Title className='fs-2 text-uppercase fw-bold'>{info.strMeal}</Card.Title>
                  <Card.Text>{info.strCategory}</Card.Text>
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