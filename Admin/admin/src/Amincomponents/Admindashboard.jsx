import React from 'react'
import Dashboard from '../Dashboardcomponents/Dashboard'
import ManageRevaluation from '../Dashboardcomponents/ManageRevaluation'
import Sidebar from '../Dashboardcomponents/Sidebar'
import TopNavbar from '../Dashboardcomponents/TopNavbar'
import ViewResults from '../Dashboardcomponents/ViewResults'
const Admindashboard = () => {
  return (
    <div>
      <Dashboard/>
      <ManageRevaluation/>
      <Sidebar/>
      <TopNavbar/>
      <ViewResults/>
    </div>
  )
}

export default Admindashboard;