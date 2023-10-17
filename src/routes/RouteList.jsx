import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ReactDOM  from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from '@material-tailwind/react'

import { LoginPage } from '../pages/auth/LoginPage'
import { RegisterPage } from '../pages/auth/RegisterPage'
import { DashboardPage } from '../pages/movie/DashboradPage'
import { DetailPage } from '../pages/movie/DetailPage'

export const RouteList = () => {
  
  //untuk menggunakan react query di index
  const queryMovie = new QueryClient()

  

  return (
    <BrowserRouter>
      {/* menggunakan react query */}
      <QueryClientProvider client={queryMovie}>
        <ThemeProvider>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
            {/* <Route path="/movie/:id" element={<DetailPage />} /> */}
        </Routes>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
