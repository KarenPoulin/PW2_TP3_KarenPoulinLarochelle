import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AllCategories from './Components/Categories/AllCategories';
import Category from './Components/Category/Category'
import Meal from './Components/Meals/Meal'
import ListFavoritesMeals from './favorites/components/ListFavoritesMeals/ListFavoritesMeals';
import './App.css'

const queryClient = new QueryClient();

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<AllCategories />}/>
        <Route path='/categories/:name' element={<Category />}/>
        <Route path='/meals/:id' element={<Meal />}/>
        <Route path='/listfavoritesmeals' element={<ListFavoritesMeals />}/>
      </Routes>
  </QueryClientProvider>
  )
}

export default App
