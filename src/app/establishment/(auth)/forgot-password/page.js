import React from 'react'
import SideImage from '@/Component/AuthComponents/sideImage'
import ForgotPassword from '@/Component/AuthComponents/ForgotPassword'
const page = () => {
  return (
    <div className='mh-100-vh'> 
    <div className='row'>
        <div className="col-md-6 p-0">
        <SideImage/>
        </div>
        <div className="col-md-6 p-0">
        <ForgotPassword/>
        </div>
    </div>
    </div>
  )
}

export default page