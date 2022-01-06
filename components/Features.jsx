/* This example requires Tailwind CSS v2.0+ */
import {
  ShoppingBagIcon,
  CogIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  CalendarIcon,
  HomeIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'One Stop Shop',
    icon: ShoppingBagIcon,
    text: 'No more asking around or juggling providers. Get it all from Easy Home.',
  },
  {
    name: 'Easy Payment',
    icon: CreditCardIcon,
    text: 'No more invoices, checkbooks, or back and forth. Just sign up with your credit card.',
  },
  {
    name: 'Convenient Scheduling',
    icon: CalendarIcon,
    text: "Set it and forget it. We'll send reminders for scheduled services prior to arriving.",
  },
  {
    name: 'Full Transparency',
    icon: CogIcon,
    text: 'Manage your account. See completed and scheduled work. Cancel anytime.',
  },
  {
    name: 'Quality Work',
    icon: HomeIcon,
    text: "Your satisfaction is guaranteed. The work is not done if you don't think it's done.",
  },
  {
    name: 'Reasonable Rates',
    icon: CurrencyDollarIcon,
    text: 'Despite the added convenience and quality, our rates are competitive with other providers.',
  },
]

export default function Features() {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-blue-600 uppercase">
          Live Easy
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          All-inclusive home care subscriptions
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Pay one monthly fee and never have to worry about doing those
          time-consuming, energy-draining chores again.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(feature => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-white shadow-lg rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
