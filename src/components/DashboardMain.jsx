import React from 'react'
import MonthlySales from './MonthlySales'
import ProductCategories from './ProductCategories'
import YearlyPerformance from './YearlyPerfomance'
import DailyActive from './DailyActive'

const DashboardMain = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <MonthlySales />
      <ProductCategories />
      <YearlyPerformance />
      <DailyActive />
    </div>
  )
}

export default DashboardMain
