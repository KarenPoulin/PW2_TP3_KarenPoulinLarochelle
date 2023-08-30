import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'

const queryClient = new QueryClient();

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/'/>
        <Route/>
      </Routes>
  </QueryClientProvider>
  )
}

export default App
