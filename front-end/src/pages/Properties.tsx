import PropertyCard from "../components/property/PropertyCard";

interface Property {
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

const Properties = () => {
  const properties: Property[] = [
    {
      id: 1,
      address1: "471 Gladwell Street",
      address2: "",
      city: "Livermore",
      state: "CA",
      zip: "94550",
      country: "United States",
      bedroom: "3",
      bathroom: "2",
      sqft: "2500",
      image:
        "https://media.istockphoto.com/photos/new-contemporary-home-picture-id175587524?b=1&k=20&m=175587524&s=170667a&w=0&h=l0woDAaSwONgJ6xF_sFSZ8r9RG_qsT7E4TSVV2W13wU=",
      type: "Single-Family",
    },
    {
      id: 2,
      address1: "456 Oak Ave",
      address2: "",
      city: "Springfield",
      state: "IL",
      zip: "62702",
      country: "USA",
      bedroom: "2",
      bathroom: "1",
      sqft: "1200",
      image:
        "https://media.istockphoto.com/photos/new-contemporary-home-picture-id175587524?b=1&k=20&m=175587524&s=170667a&w=0&h=l0woDAaSwONgJ6xF_sFSZ8r9RG_qsT7E4TSVV2W13wU=",
      type: "Townhouse",
    },
    {
      id: 3,
      address1: "789 Pine Rd",
      address2: "Apt 101",
      city: "Springfield",
      state: "IL",
      zip: "62703",
      country: "USA",
      bedroom: "1",
      bathroom: "1",
      sqft: "800",
      image:
        "https://media.istockphoto.com/photos/new-contemporary-home-picture-id175587524?b=1&k=20&m=175587524&s=170667a&w=0&h=l0woDAaSwONgJ6xF_sFSZ8r9RG_qsT7E4TSVV2W13wU=",
      type: "Apartment",
    },
    {
      id: 4,
      address1: "321 Elm St",
      address2: "Unit 202",
      city: "Springfield",
      state: "IL",
      zip: "62704",
      country: "USA",
      bedroom: "2",
      bathroom: "2",
      sqft: "1100",
      image:
        "https://media.istockphoto.com/photos/new-contemporary-home-picture-id175587524?b=1&k=20&m=175587524&s=170667a&w=0&h=l0woDAaSwONgJ6xF_sFSZ8r9RG_qsT7E4TSVV2W13wU=",
      type: "Condo",
    },
    {
      id: 5,
      address1: "654 Maple Dr",
      address2: "",
      city: "Springfield",
      state: "IL",
      zip: "62705",
      country: "USA",
      bedroom: "4",
      bathroom: "3",
      sqft: "2000",
      image:
        "https://media.istockphoto.com/photos/new-contemporary-home-picture-id175587524?b=1&k=20&m=175587524&s=170667a&w=0&h=l0woDAaSwONgJ6xF_sFSZ8r9RG_qsT7E4TSVV2W13wU=",
      type: "Single-Family",
    },
    {
      id: 6,
      address1: "987 Cedar Ln",
      address2: "",
      city: "Springfield",
      state: "IL",
      zip: "62706",
      country: "USA",
      bedroom: "3",
      bathroom: "2.5",
      sqft: "1600",
      image:
        "https://media.istockphoto.com/photos/new-contemporary-home-picture-id175587524?b=1&k=20&m=175587524&s=170667a&w=0&h=l0woDAaSwONgJ6xF_sFSZ8r9RG_qsT7E4TSVV2W13wU=",
      type: "Townhouse",
    },
    {
      id: 7,
      address1: "159 Birch Blvd",
      address2: "Apt 303",
      city: "Springfield",
      state: "IL",
      zip: "62707",
      country: "USA",
      bedroom: "2",
      bathroom: "1.5",
      sqft: "900",
      image:
        "https://media.istockphoto.com/photos/new-contemporary-home-picture-id175587524?b=1&k=20&m=175587524&s=170667a&w=0&h=l0woDAaSwONgJ6xF_sFSZ8r9RG_qsT7E4TSVV2W13wU=",
      type: "Apartment",
    },
    {
      id: 8,
      address1: "753 Willow Way",
      address2: "Unit 404",
      city: "Springfield",
      state: "IL",
      zip: "62708",
      country: "USA",
      bedroom: "3",
      bathroom: "2",
      sqft: "1300",
      image:
        "https://media.istockphoto.com/photos/new-contemporary-home-picture-id175587524?b=1&k=20&m=175587524&s=170667a&w=0&h=l0woDAaSwONgJ6xF_sFSZ8r9RG_qsT7E4TSVV2W13wU=",
      type: "Condo",
    },
    {
      id: 9,
      address1: "852 Spruce St",
      address2: "",
      city: "Springfield",
      state: "IL",
      zip: "62709",
      country: "USA",
      bedroom: "5",
      bathroom: "4",
      sqft: "2500",
      image:
        "https://media.istockphoto.com/photos/new-contemporary-home-picture-id175587524?b=1&k=20&m=175587524&s=170667a&w=0&h=l0woDAaSwONgJ6xF_sFSZ8r9RG_qsT7E4TSVV2W13wU=",
      type: "Single-Family",
    },
    {
      id: 10,
      address1: "741 Ash Ln",
      address2: "",
      city: "Springfield",
      state: "IL",
      zip: "62710",
      country: "USA",
      bedroom: "3",
      bathroom: "2",
      sqft: "1700",
      image:
        "https://media.istockphoto.com/photos/new-contemporary-home-picture-id175587524?b=1&k=20&m=175587524&s=170667a&w=0&h=l0woDAaSwONgJ6xF_sFSZ8r9RG_qsT7E4TSVV2W13wU=",
      type: "Townhouse",
    },
    {
      id: 11,
      address1: "369 Palm St",
      address2: "Apt 505",
      city: "Springfield",
      state: "IL",
      zip: "62711",
      country: "USA",
      bedroom: "1",
      bathroom: "1",
      sqft: "850",
      image:
        "https://media.istockphoto.com/photos/new-contemporary-home-picture-id175587524?b=1&k=20&m=175587524&s=170667a&w=0&h=l0woDAaSwONgJ6xF_sFSZ8r9RG_qsT7E4TSVV2W13wU=",
      type: "Apartment",
    },
    {
      id: 12,
      address1: "258 Magnolia Ct",
      address2: "Unit 606",
      city: "Springfield",
      state: "IL",
      zip: "62712",
      country: "USA",
      bedroom: "2",
      bathroom: "2",
      sqft: "1000",
      image:
        "https://media.istockphoto.com/photos/new-contemporary-home-picture-id175587524?b=1&k=20&m=175587524&s=170667a&w=0&h=l0woDAaSwONgJ6xF_sFSZ8r9RG_qsT7E4TSVV2W13wU=",
      type: "Condo",
    },
    {
      id: 13,
      address1: "147 Redwood Dr",
      address2: "",
      city: "Springfield",
      state: "IL",
      zip: "62713",
      country: "USA",
      bedroom: "4",
      bathroom: "3",
      sqft: "1800",
      image:
        "https://media.istockphoto.com/photos/new-contemporary-home-picture-id175587524?b=1&k=20&m=175587524&s=170667a&w=0&h=l0woDAaSwONgJ6xF_sFSZ8r9RG_qsT7E4TSVV2W13wU=",
      type: "Single-Family",
    },
    {
      id: 14,
      address1: "456 Cypress Ln",
      address2: "",
      city: "Springfield",
      state: "IL",
      zip: "62714",
      country: "USA",
      bedroom: "2",
      bathroom: "1.5",
      sqft: "1400",
      image:
        "https://media.istockphoto.com/photos/new-contemporary-home-picture-id175587524?b=1&k=20&m=175587524&s=170667a&w=0&h=l0woDAaSwONgJ6xF_sFSZ8r9RG_qsT7E4TSVV2W13wU=",
      type: "Townhouse",
    },
    {
      id: 15,
      address1: "369 Dogwood St",
      address2: "Apt 707",
      city: "Springfield",
      state: "IL",
      zip: "62715",
      country: "USA",
      bedroom: "3",
      bathroom: "2",
      sqft: "1100",
      image:
        "https://media.istockphoto.com/photos/new-contemporary-home-picture-id175587524?b=1&k=20&m=175587524&s=170667a&w=0&h=l0woDAaSwONgJ6xF_sFSZ8r9RG_qsT7E4TSVV2W13wU=",
      type: "Apartment",
    },
    {
      id: 16,
      address1: "951 Maplewood Dr",
      address2: "Unit 808",
      city: "Springfield",
      state: "IL",
      zip: "62716",
      country: "USA",
      bedroom: "2",
      bathroom: "2",
      sqft: "950",
      image:
        "https://media.istockphoto.com/photos/new-contemporary-home-picture-id175587524?b=1&k=20&m=175587524&s=170667a&w=0&h=l0woDAaSwONgJ6xF_sFSZ8r9RG_qsT7E4TSVV2W13wU=",
      type: "Condo",
    },
  ];

  return (
    <div className='mx-auto flex h-full min-h-screen flex-col items-center justify-center text-orange-600 lg:max-w-7xl lg:flex-row lg:flex-wrap lg:items-center'>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default Properties;
