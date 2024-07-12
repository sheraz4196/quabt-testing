import { CheckIcon } from "@heroicons/react/20/solid"
import Image from "next/image"

const pricingOptions = [
  {
    title: "VPS Lite",
    originalPrice: 38,
    discountedPrice: 19,
    features: [
      "4x AMD vCPU",
      "8GB DDR4 RAM",
      "160GB NVMe Storage",
      "Instant Deployment",
      "Perfect For Running (1) Strategy",
    ],
    buttonText: "Deploy VPS Lite",
    isPopular: false,
  },
  {
    title: "VPS Pro",
    originalPrice: 58,
    discountedPrice: 29,
    features: [
      "8x AMD vCPU",
      "8GB DDR4 RAM",
      "160GB NVMe Storage",
      "Instant Deployment",
      "Perfect For Running (2-3) Strategy",
    ],
    buttonText: "Deploy VPS Pro",
    isPopular: false,
  },
  {
    title: "VPS Max",
    originalPrice: 128,
    discountedPrice: 39,
    features: [
      "12x AMD vCPU",
      "8GB DDR4 RAM",
      "160GB NVMe Storage",
      "Instant Deployment",
      "Perfect For Running (4-7) Strategy",
    ],
    buttonText: "Deploy VPS Max",
    isPopular: true,
  },
  {
    title: "VPS Ultra",
    originalPrice: 167,
    discountedPrice: 49,
    features: [
      "24x AMD vCPU",
      "32GB DDR4 RAM",
      "1TB NVMe Storage",
      "Instant Deployment",
      "Perfect For Running (8+) Strategy",
    ],
    buttonText: "Deploy VPS Ultra",
    isPopular: false,
  },
]

const PricingCard = ({
  title,
  originalPrice,
  discountedPrice,
  features,
  buttonText,
  isPopular,
}: Record<string, any>) => {
  return (
    <div
      className={`card relative flex flex-col rounded-lg bg-[#262329] bg-card px-6 py-4 text-left shadow ${
        isPopular ? "border border-primary" : ""
      }`}
    >
      {isPopular && (
        <div className="absolute inset-x-0 -top-4 mx-auto w-fit rounded-full bg-primary px-3 py-1 font-bold text-white">
          Popular
        </div>
      )}
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <div className="flex items-center gap-2">
        <s className="text-lg font-bold text-gray-400">${originalPrice}</s>
        <span className="text-4xl font-black ">
          ${discountedPrice}
          <span className="ml-2 text-base font-bold text-muted-foreground">
            50% off first month
          </span>
        </span>
      </div>
      <div className="card-inner">
        <ul className="card-front my-6 flex-1 text-center transition-all duration-300 ease-in-out">
          {features.map((feature: any, index: number) => (
            <li key={index} className="flex items-center gap-2 font-semibold">
              <CheckIcon color="rgb(34 197 94)" width={20} height={20} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <form className="card-back transition-all duration-300 ease-in-out">
          <div className="flex gap-3">
            <div className="">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="email address"
                className="w-full px-3 py-1 bg-gray-100 rounded-md text-gray-900 placeholder-gray-400"
              />
            </div>

            <div className="">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="password"
                className="w-full px-3 py-1 bg-gray-100 rounded-md text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>
          <div className="">
            <div className="relative mt-2">
              <input
                type="text"
                id="card"
                placeholder="XXXX XXXX XXXX XXXX"
                className=" mb-2 w-full px-3 py-1 bg-gray-100 rounded-md text-gray-900 placeholder-gray-400"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1 pb-2">
                <Image
                  src="/payment/visa.svg"
                  alt="Visa"
                  width={30}
                  height={30}
                />
                <Image
                  src="/payment/mastercard.svg"
                  alt="MasterCard"
                  width={30}
                  height={30}
                />
                <Image
                  src="/payment/amex.svg"
                  alt="Amex"
                  width={30}
                  height={30}
                />
                <Image
                  src="/payment/diners.svg"
                  alt="diners"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>

          <div className="flex mb-2">
            <div className="w-1/2 pr-2">
              <input
                type="text"
                placeholder="MM / YY"
                className="w-full px-3 py-1 bg-gray-100 rounded-md text-gray-900 placeholder-gray-400"
              />
            </div>
            <div className="w-1/4 px-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-full px-3 py-1 bg-gray-100 rounded-md text-gray-900 placeholder-gray-400"
                />
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="w-1/4 pl-2">
              <input
                type="text"
                placeholder="ZIP"
                className="w-full px-3 py-1 bg-gray-100 rounded-md text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>

          <p className="text-sm">
            By pressing continue, you agree to our{" "}
            <a href="#" className="underline">
              terms
            </a>
            .
          </p>
        </form>
      </div>

      <div className="text-center">
        <a
          href="https://seoroast.org/"
          className="inline-flex items-center justify-center text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 mt-6 w-full font-bold"
        >
          {buttonText}
        </a>
      </div>
    </div>
  )
}

export default function Pricing() {
  return (
    <div className="sm:px-8 mt-16 lg:mt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="mx-auto text-center">
              <h2 className="mx-auto mb-2 max-w-xl text-xl font-bold tracking-tight md:text-4xl">
                NinjaTrader VPS Pricing
              </h2>
              <div className="mb-6 font-bold md:text-xl lg:mb-12">
                <p className="mb-4 text-gray-500">
                  Instant Deployment & Free Tech Support
                </p>
              </div>
              <div className="mx-auto mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {pricingOptions.map((option, index) => (
                  <PricingCard key={index} {...option} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
