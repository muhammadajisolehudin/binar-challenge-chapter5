import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import ReactDOM  from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from '@material-tailwind/react'
import { DetailPage } from '../pages/DetailPage'


export const RouteList = () => {
  
  //untuk menggunakan react query di index
  const queryMovie = new QueryClient()

  

  return (
    <BrowserRouter>
      {/* menggunakan react query */}
      <QueryClientProvider client={queryMovie}>
        <ThemeProvider>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<DetailPage />} />
        </Routes>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
