import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

const frequencies = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];
const tiers = [
  {
    name: "Individual",
    id: "tier-individual",
    href: "/auth/signup",
    price: { monthly: "$20", annually: "$200" },
    description:
      "Our entery level plan to get you started on managing your property.",
    features: ["1 property", "48-hour support response time"],
    mostPopular: false,
  },
  {
    name: "Professional",
    id: "tier-professional",
    href: "/auth/signup",
    price: { monthly: "$50", annually: "$500" },
    description:
      "A plan that scales with your rapidly growing property portfolio.",
    features: ["8 properties", "24-hour support response time"],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "/auth/signup",
    price: { monthly: "$70", annually: "$700" },
    description: "Dedicated support for your fast growing property portfolio.",
    features: ["10+ properties", "1-hour, dedicated support response time"],
    mostPopular: false,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Pricing = () => {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <>
      <div id='pricing' className='bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl text-center'>
            <h2 className='text-xl font-semibold leading-7 text-orange-600'>
              Pricing
            </h2>
            <p className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Pricing plans for portfolios of&nbsp;all&nbsp;sizes
            </p>
          </div>
          <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600'>
            Choose the perfect plan that fits your property portfolio size and
            unlocks the full potential of our property management platform.
          </p>
          <div className='mt-16 flex justify-center'>
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className='grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-base font-semibold leading-5 ring-1 ring-inset ring-gray-200'
            >
              <RadioGroup.Label className='sr-only'>
                Payment frequency
              </RadioGroup.Label>
              {frequencies.map((option) => (
                <RadioGroup.Option
                  key={option.value}
                  value={option}
                  className={({ checked }) =>
                    classNames(
                      checked ? "bg-orange-600 text-white" : "text-gray-500",
                      "cursor-pointer rounded-full px-2.5 py-1",
                    )
                  }
                >
                  <span>{option.label}</span>
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>
          <div className='isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3'>
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "ring-2 ring-orange-600"
                    : "ring-1 ring-gray-200",
                  "rounded-3xl p-8",
                )}
              >
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? "text-orange-600" : "text-gray-900",
                    "text-xl font-semibold leading-8",
                  )}
                >
                  {tier.name}
                </h3>
                <p className='mt-4 text-sm leading-6 text-gray-600'>
                  {tier.description}
                </p>
                <p className='mt-6 flex items-baseline gap-x-1'>
                  <span className='text-4xl font-bold tracking-tight text-gray-900'>
                    {tier.price[frequency.value]}
                  </span>
                  <span className='text-sm font-semibold leading-6 text-gray-600'>
                    {frequency.priceSuffix}
                  </span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-orange-600 text-white shadow-sm hover:bg-orange-500"
                      : "text-orange-600 ring-1 ring-inset ring-orange-200 hover:ring-orange-300",
                    "mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600",
                  )}
                >
                  Buy plan
                </a>
                <ul
                  role='list'
                  className='mt-8 space-y-3 text-sm leading-6 text-gray-600'
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className='flex gap-x-3'>
                      <CheckIcon
                        className='h-6 w-5 flex-none text-orange-600'
                        aria-hidden='true'
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
