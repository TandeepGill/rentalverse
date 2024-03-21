import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(7);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount - 1);
    }, 1000);

    count === 0 && navigate("/auth/login");

    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className='text-center'>
          <p className='text-3xl font-semibold text-orange-600'>403</p>
          <h1 className='mt-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Forbidden: Access denied
          </h1>
          <p className='mt-6 text-xl leading-7 text-gray-600'>
            Sorry, you don't have permission to view this page. You'll be
            redirected in <span className='text-orange-600'>{count}</span>{" "}
            {count < 2 ? "second" : "seconds"}.
          </p>
        </div>
      </div>
    </>
  );
};

export default LoadingToRedirect;
