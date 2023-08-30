import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

import MealService from '../Service/TheMealService'

const mealService = new MealService();


const Category = () => {
  return (
    <div>
        <Link to='/'>Retour aux Catégories</Link>
    </div>
  )
}

export default Category