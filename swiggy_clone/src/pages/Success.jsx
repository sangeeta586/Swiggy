import React, { useState, useEffect } from 'react'; // Make sure to import useState and useEffect
import { ThreeCircles } from 'react-loader-spinner';

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);


    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      {loading ? (

        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
        />
      ) : (

        <>
          <h1 className='text-2xl font-bold'>Order successful!</h1>
          <h2>Your order has been successfully placed</h2>
        </>
      )}
    </div>
  );
};

export default Success;
