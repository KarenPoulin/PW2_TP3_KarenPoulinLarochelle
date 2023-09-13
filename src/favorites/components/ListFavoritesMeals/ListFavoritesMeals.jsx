import React from 'react'
import { useSelector } from 'react-redux'
import { favoritesSelector } from '../../store/favoritesSelectors'

const ListFavoritesMeals = () => {
    const favorites = useSelector(favoritesSelector);
    console.log(favorites);

  return (
    <div>
        <h1>Recettes Favorites</h1>
        <ul>
            {favorites.map(meal => 
                <li key={meal.idMeal}>{meal.strMeal}</li>
            )}
        </ul>
    </div>
  )
}

export default ListFavoritesMeals