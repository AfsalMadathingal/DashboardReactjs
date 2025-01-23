import React from 'react'
import MonthlySales from './MonthlySales'
import ProductCategories from './ProductCategories'
import YearlyPerformance from './YearlyPerfomance'
import DailyActive from './DailyActive'
import EmployeeRatings from './EmployeeRatings'
import SalesTrends from './SalesTrends'
import RegionalSales from './RegionalSales'
import UserGrowth from './UserGrowth'

const DashboardMain = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">

        <div className="md:col-span-2 lg:col-span-2 xl:col-span-2">
          <MonthlySales />
        </div>


        <div className="md:col-span-1 lg:col-span-1 xl:col-span-1">
          <ProductCategories />
        </div>

        <div className="md:col-span-1 lg:col-span-1 xl:col-span-1">
          <RegionalSales />
        </div>


        <div className="md:col-span-2 lg:col-span-2 xl:col-span-2">
          <YearlyPerformance />
        </div>

        <div className="md:col-span-2 lg:col-span-2 xl:col-span-2">
          <SalesTrends />
        </div>



        <DailyActive />
        <UserGrowth />
        <EmployeeRatings />
      </div>
    </div>
  )
}

export default DashboardMain