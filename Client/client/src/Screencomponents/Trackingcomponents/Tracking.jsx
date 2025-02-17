import React from 'react'
import Trackingform from '../../Components/Tracking/Trackingform'
import EditProfile from '../../Components/Tracking/EditProfile'

const Tracking = () => {
  return (
    <div>
      <Trackingform/>
      <Trackingstatus/>
      <EditProfile/>
    </div>
  )
}

export default Tracking