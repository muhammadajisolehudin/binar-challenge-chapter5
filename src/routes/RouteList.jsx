import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ReactDOM  from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LoginPage } from '../pages/auth/LoginPage'

export const RouteList = () => {
  
  //untuk menggunakan react query di index
  const queryMovie = new QueryClient()

  

  return (
    <BrowserRouter>
      {/* menggunakan react query */}
      <QueryClientProvider client={queryMovie}>
        <Routes>
            <Route path="/" element={<LoginPage />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}
