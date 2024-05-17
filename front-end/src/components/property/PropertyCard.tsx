import { Link } from "react-router-dom";
import { formatNumericStringWithComma } from "../../utils/formatter";

interface PropertyProps {
  id: number;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  bedroom: string;
  bathroom: string;
  sqft: string;
  image: string;
  type: string;
}

const PropertyCard = ({ property }: { property: PropertyProps }) => {
  return (
    <>
      <div
        key={property.id}
        className='m-auto mb-6 flex w-96 flex-col items-center rounded-md border-2 border-orange-300 p-2 shadow-xl sm:w-72 lg:m-2'
      >
        <Link to={`/properties/${property.id}`}>
          <div className='m-0.5'>
            <img
              className='mb-2 rounded-md object-cover'
              src={property.image}
              alt=''
            />
          </div>
          <h3 className='mb-2 mt-6 text-center font-medium text-gray-900'>
            {`${property.address1},`}
            {property.address2.length > 0 && ` ${property.address2},`}
            <br />
            {`${property.city}, ${property.state} ${property.zip}`}
          </h3>
          <h4 className='mb-2 text-center text-base text-gray-500'>
            {property.type}
          </h4>

          <div className='mb-2 flex justify-between space-x-4'>
            <h3 className='flex items-center text-orange-600'>
              <img
                className='h-5 w-5'
                src='https://img.icons8.com/?size=32&id=9620&format=png'
                alt='sqft'
              />
              <span className='px-2 text-orange-600'>
                {formatNumericStringWithComma(property.sqft)} sq ft
              </span>
            </h3>
            <div className='flex'>
              <h3 className='mx-2 flex items-center text-orange-600'>
                <img
                  className='h-5 w-5'
                  src='https://img.icons8.com/?size=32&id=561&format=png'
                  alt='bedroom'
                />
                <span className='px-2 text-orange-600'>{property.bedroom}</span>
              </h3>
              <h3 className='flex items-center'>
                <img
                  className='h-5 w-5'
                  src='https://img.icons8.com/?size=32&id=11485&format=png'
                  alt='bathroom'
                />
                <span className='px-2 text-orange-600'>
                  {property.bathroom}
                </span>
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default PropertyCard;
