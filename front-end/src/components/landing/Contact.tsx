const Contact = () => {
  return (
    <>
      <div id='contact' className='bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3'>
              <div>
                <h2 className='text-4xl font-bold tracking-tight text-gray-900'>
                  Get in touch
                </h2>
                <p className='mt-4 leading-7 text-gray-600'>
                  Have questions or need assistance? Reach out to us today!
                </p>
              </div>
              <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8'>
                <div className='rounded-2xl bg-gray-50 p-10'>
                  <h3 className='text-lg font-semibold leading-7 text-gray-900'>
                    Sales
                  </h3>
                  <dl className='mtsmpace-y-1 text-base leading-6 text-gray-600'>
                    <div>
                      <dt className='sr-only'>Email</dt>
                      <dd>
                        <a
                          className='font-semibold text-orange-600'
                          href='mailto:sales@rentalverse.com'
                        >
                          sales@rentalverse.com
                        </a>
                      </dd>
                    </div>
                    <div className='mt-1'>
                      <dt className='sr-only'>Phone number</dt>
                      <dd>+1 (555) 905-2345</dd>
                    </div>
                  </dl>
                </div>
                <div className='rounded-2xl bg-gray-50 p-10'>
                  <h3 className='text-lg font-semibold leading-7 text-gray-900'>
                    Press
                  </h3>
                  <dl className='mtsmpace-y-1 text-base leading-6 text-gray-600'>
                    <div>
                      <dt className='sr-only'>Email</dt>
                      <dd>
                        <a
                          className='font-semibold text-orange-600'
                          href='mailto:press@rentalverse.com'
                        >
                          press@rentalverse.com
                        </a>
                      </dd>
                    </div>
                    <div className='mt-1'>
                      <dt className='sr-only'>Phone number</dt>
                      <dd>+1 (555) 905-3456</dd>
                    </div>
                  </dl>
                </div>
                <div className='rounded-2xl bg-gray-50 p-10'>
                  <h3 className='text-lg font-semibold leading-7 text-gray-900'>
                    Join our team
                  </h3>
                  <dl className='mtsmpace-y-1 text-base leading-6 text-gray-600'>
                    <div>
                      <dt className='sr-only'>Email</dt>
                      <dd>
                        <a
                          className='font-semibold text-orange-600'
                          href='mailto:careers@rentalverse.com'
                        >
                          careers@rentalverse.com
                        </a>
                      </dd>
                    </div>
                    <div className='mt-1'>
                      <dt className='sr-only'>Phone number</dt>
                      <dd>+1 (555) 905-4567</dd>
                    </div>
                  </dl>
                </div>
                <div className='rounded-2xl bg-gray-50 p-10'>
                  <h3 className='text-lg font-semibold leading-7 text-gray-900'>
                    Say hello
                  </h3>
                  <dl className='mtsmpace-y-1 text-base leading-6 text-gray-600'>
                    <div>
                      <dt className='sr-only'>Email</dt>
                      <dd>
                        <a
                          className='font-semibold text-orange-600'
                          href='mailto:hello@rentalverse.com'
                        >
                          hello@rentalverse.com
                        </a>
                      </dd>
                    </div>
                    <div className='mt-1'>
                      <dt className='sr-only'>Phone number</dt>
                      <dd>+1 (555) 905-5678</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3'>
              <div>
                <h2 className='text-4xl font-bold tracking-tight text-gray-900'>
                  Locations
                </h2>
                <p className='mt-4 leading-7 text-gray-600'>
                  Visit us to discuss your property management platform needs in
                  person, or connect with us online for remote assistance.
                </p>
              </div>
              <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8'>
                <div className='rounded-2xl bg-gray-50 p-10'>
                  <h3 className='text-lg font-semibold leading-7 text-gray-900'>
                    Los Angeles
                  </h3>
                  <address className='mt-3 space-y-1 text-base not-italic leading-6 text-gray-600'>
                    <p>4556 Brendan Ferry</p>
                    <p>Los Angeles, CA 90210</p>
                  </address>
                </div>
                <div className='rounded-2xl bg-gray-50 p-10'>
                  <h3 className='text-lg font-semibold leading-7 text-gray-900'>
                    New York
                  </h3>
                  <address className='mt-3 space-y-1 text-base not-italic leading-6 text-gray-600'>
                    <p>886 Walter Street</p>
                    <p>New York, NY 12345</p>
                  </address>
                </div>
                <div className='rounded-2xl bg-gray-50 p-10'>
                  <h3 className='text-lg font-semibold leading-7 text-gray-900'>
                    Seatle
                  </h3>
                  <address className='mt-3 space-y-1 text-base not-italic leading-6 text-gray-600'>
                    <p>7363 Cynthia Pass</p>
                    <p>Seattle, WA 98109</p>
                  </address>
                </div>
                <div className='rounded-2xl bg-gray-50 p-10'>
                  <h3 className='text-lg font-semibold leading-7 text-gray-900'>
                    Chicago
                  </h3>
                  <address className='mt-3 space-y-1 text-base not-italic leading-6 text-gray-600'>
                    <p>726 Mavis Island</p>
                    <p>Chicago, IL 60601</p>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
