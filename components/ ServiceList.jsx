import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Lawn Care',
    description: 'Mowing, seeding, aerifying, sod, leaf removal, and more.',
  },
  {
    name: 'House Cleaning',
    description: 'Vacuuming, dusting, mopping, windows, bathrooms, kitchens.',
  },
  {
    name: 'Auto Detailing',
    description: 'Basic wash to full detailing for cars, trucks, and boats.',
  },
  {
    name: 'Pet Care',
    description: 'Dog walking, pet sitting, grooming, and poop scooping.',
  },
  {
    name: 'Pool Care',
    description: 'Regular cleaning, skimming, chlorination, and seasonal care.',
  },
  {
    name: 'Gutter Cleaning',
    description: 'Leaf and debris removal on all sized homes.',
  },
  {
    name: 'Powerwashing',
    description: 'Driveways, decks, fences, and hard to clean surfaces.',
  },
  {
    name: 'Windows',
    description: 'Seasonal window cleaning, outdoors and indoors.',
  },
]

export default function ServiceList() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:pb-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Services</h2>
          <p className="mt-4 text-lg text-gray-500">
            Here are the kinds of services that you can expect from Easy Home.
            We'll update the list of services available at launch and continue
            to add more over time.
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map(feature => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon
                  className="absolute h-6 w-6 text-blue-500"
                  aria-hidden="true"
                />
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
