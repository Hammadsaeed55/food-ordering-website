import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'

const Success = () => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },3000);
  },[]);
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-green-200'>
    {loading ? (
      <PropagateLoader color='#36d7b7'/>
    ) : (
      <div>
      <h2 className='text-3xl font-semibold mb-4 text-center'>Order Successful!</h2>
      <p >Your order has been successfully placed</p>
      <h2 className='text-3xl font-semibold mt-4 text-center font-sans'>Thankyou</h2>
      </div>
    )}
    </div>
  );
}

export default Success
