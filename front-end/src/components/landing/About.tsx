const stats = [
  { label: "Investors on the platform", value: "8 thousand" },
  { label: "Collected in rent", value: "$42 million" },
  { label: "Tenants managed using our platform", value: "50,000" },
];

const About = () => {
  return (
    <>
      <div id='about' className='bg-white py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
            <h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              About Us
            </h2>
            <div className='mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row'>
              <div className='lg:w-full lg:max-w-2xl lg:flex-auto'>
                <p className='text-xl leading-8 text-gray-600'>
                  At Rentalverse, we're passionate about revolutionizing the way
                  investors manage their properties. With years of experience in
                  both real estate and technology, we understand the challenges
                  faced by property investors.
                </p>
                <p className='mt-10 max-w-xl text-base leading-7 text-gray-700'>
                  That's why we've developed an innovative platform solution
                  that simplifies every aspect of property management, from
                  tenant communication to financial tracking and maintenance
                  coordination. Our goal is to empower investors with the tools
                  they need to streamline their operations, maximize efficiency,
                  and ultimately, optimize their return on investment.
                </p>
              </div>
              <div className='lg:flex lg:flex-auto lg:justify-center'>
                <dl className='w-64 space-y-8 xl:w-80'>
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className='flex flex-col-reverse gap-y-4'
                    >
                      <dt className='text-lg leading-7 text-gray-600'>
                        {stat.label}
                      </dt>
                      <dd className='text-5xl font-semibold tracking-tight text-gray-900'>
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
