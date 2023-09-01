import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AllCategories from './Components/Categories/AllCategories';
import Category from './Components/Category/Category'
import Meal from './Components/Meals/Meal'
import './App.css'

const queryClient = new QueryClient();

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<AllCategories />}/>
        <Route path='/categories/:name' element={<Category />}/>
        <Route path='/meals/:id' element={<Meal />}/>
      </Routes>
  </QueryClientProvider>
  )
}

export default App
