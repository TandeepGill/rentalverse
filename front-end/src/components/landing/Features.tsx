import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Property Dashboard",
    description: "Centralize property management with key metrics and alerts.",
  },
  {
    name: "Tenant Management",
    description: "Easily handle tenant details, leases, and communication.",
  },
  {
    name: "Maintenance Requests",
    description: "Simplify maintenance tracking and management.",
  },
  {
    name: "Financial Tracking",
    description: "Stay organized with rent, expenses, and financial reports.",
  },
  {
    name: "Document Storage",
    description: "Securely store important documents for easy access.",
  },
  {
    name: "Lease Management",
    description: "Simplify lease processes and ensure compliance.",
  },
  {
    name: "Vendor Management",
    description: "Coordinate services and repairs efficiently.",
  },
  {
    name: "Tenant Portal",
    description: "Offer tenants an online hub for payments and requests.",
  },
];
const Features = () => {
  return (
    <>
      <div id='features' className='bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            <div>
              <h2 className='text-xl font-semibold leading-7 text-orange-600'>
                Everything you need
              </h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                All-in-one platform
              </p>
              <p className='mt-6 text-lg leading-7 text-gray-600'>
                Explore our comprehensive suite of features designed to
                streamline every aspect of property management, all within a
                user-friendly platform.
              </p>
            </div>
            <dl className='col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-lg leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16'>
              {features.map((feature) => (
                <div key={feature.name} className='relative pl-9'>
                  <dt className='font-semibold text-gray-900'>
                    <CheckIcon
                      className='absolute left-0 top-1 h-5 w-5 text-orange-500'
                      aria-hidden='true'
                    />
                    {feature.name}
                  </dt>
                  <dd className='mt-2'>{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
