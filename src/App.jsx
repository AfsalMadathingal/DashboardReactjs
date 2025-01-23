import React, { useState, Suspense } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoadingPage from './components/LoadingPage'

const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const Home = React.lazy(() => import('./pages/Home'))
const UserManagement = React.lazy(() => import('./pages/UserManagement'))
const TaskManagement = React.lazy(() => import('./pages/TaskPage'))

function App() {


  return (
    <>
      <Suspense fallback={<LoadingPage  />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/task-management" element={<TaskManagement />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App

