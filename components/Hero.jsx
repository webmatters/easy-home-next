import Link from 'next/link'

import BasicError from './shared/BasicError'
import BasicAlert from './shared/BasicAlert'

export default function Hero({ addEmail, error, alertMessage }) {
  const submitEmail = async event => {
    event.preventDefault()
    const email = event.target.email.value
    addEmail(email)
    event.target.reset()
  }

  return (
    <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-24">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="mt-20">
              <div className="mt-6 sm:max-w-xl">
                <h1>
                  <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                    Coming soon
                  </span>
                  <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                    <span className="block text-blue-600">Easy Home</span>
                    <span className="block text-gray-900">
                      Home Care Simplified
                    </span>
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Ever wish you could have all of your home maintenance chores
                  handled with one simple subscription? With Easy Home you'll be
                  able to set it and forget it. Imagine never having to worry
                  about mowing the lawn, scrubbing the toilets, or cleaning out
                  gutters again. Just select the package of services you want,
                  how often you want them done, and we'll take care of the rest.
                </p>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Enter your email below to be notified when we launch.
                </p>
              </div>
              <form
                className="mt-12 mb-3 sm:max-w-lg sm:w-full sm:flex"
                onSubmit={submitEmail}
              >
                <div className="min-w-0 flex-1">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-blue-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
                  >
                    Notify me
                  </button>
                </div>
              </form>
              {error && <BasicError message={error} />}
              {alertMessage && <BasicAlert message={alertMessage} />}
              <p className="m-3 text-sm text-gray-500">
                We care about the protection of your data. Read our{' '}
                <Link href="/privacy">
                  <a className="font-medium text-gray-900 underline">
                    Privacy Policy
                  </a>
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1549517045-bc93de075e53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
