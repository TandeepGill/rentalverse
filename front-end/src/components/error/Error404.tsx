import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <main className='flex h-screen items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <p className='text-3xl font-semibold text-orange-600'>404</p>
          <h1 className='mt-4 text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Page not found
          </h1>
          <p className='mt-6 text-xl leading-7 text-gray-600'>
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link to='/'>
              <span className='rounded-md bg-orange-600 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'>
                Go back home
              </span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Error404;
