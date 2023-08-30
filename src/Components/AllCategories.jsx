import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import MealService from '../Service/TheMealService'

const mealService = new MealService();

const AllCategories = () => {
    const {isLoading, isError, data, error} = useQuery({
        queryKey: ['category'],
        queryFn: () => mealService.getAllCategories(),
    });

    if (isLoading) return <div>Loading</div>
    if (isError) return <div>Error: {error.message}</div>

  return (
    <div>
        <h1>All Categories</h1>
        {data && data.categories.map(category =>
            <Link to={`/categories/${category.strCategory}`} key={category.idCategory}>
                <h2>{category.strCategory}</h2>
            </Link>
        )}
    </div>
  )
}

export default AllCategories