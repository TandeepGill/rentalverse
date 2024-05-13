import PropertyCard from "../components/property/PropertyCard";

const Properties = () => {
  return (
    <div className='flex h-full min-h-screen flex-col items-center justify-center text-orange-600'>
      <h1 className='text-6xl'>Properties</h1>
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
    </div>
  );
};

export default Properties;
