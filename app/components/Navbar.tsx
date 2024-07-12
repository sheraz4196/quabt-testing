"use client"
import Image from "next/image"
import React, { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className="bg-black text-center p-2">
        <p className="text-xs sm:text-sm font-medium">
          Deploy a NinjaTrader VPS Today and Get 50% OFF First Month!{" "}
          <span>Code: Quant50</span>
        </p>
      </div>

      <nav className="bg-white shadow-md">
        <div className="max-w-[1400px] mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-14">
            {/* Logo + Name */}
            <div className="flex items-center gap-2 md:gap-1 lg:gap-2">
              <span className="p-1.5 bg-black rounded-xl shadow-md">
                <Image
                  src="/header/header-logo.svg"
                  alt="Trading Servers"
                  className="h-7 w-7"
                  width={24}
                  height={24}
                />
              </span>
              <div className="flex flex-col">
                <span className="text-gray-800 text-sm md:text-xs lg:text-sm font-bold">
                  Trading Servers
                </span>
                <span className="text-gray-500 font-semibold text-[10px] lg:text-xs">
                  By QuantVPS.com
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center mr-4 md:gap-1 lg:gap-3 text-sm">
                {["Brokers", "Features", "Pricing", "Examples", "GitHub"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-gray-600 hover:text-gray-900 hover:font-medium md:p-0.5 lg:p-1"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
              <div className="flex items-center md:gap-1 lg:gap-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 hover:scale-105"
                >
                  <Image
                    src="/header/header-github.svg"
                    alt="GitHub"
                    width={16}
                    height={16}
                  />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 hover:scale-105"
                >
                  <Image
                    src="/header/header-x.svg"
                    alt="X"
                    width={16}
                    height={16}
                  />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 hover:font-medium md:p-0.5 lg:p-1"
                >
                  login
                </a>
                <div className="flex items-center gap-2 border border-gray-300 rounded-md py-1 px-2">
                  <a
                    href="#"
                    className="text-gray-600 md:text-sm lg:text-base hover:text-gray-900 hover:font-medium md:p-0.5 lg:p-1"
                  >
                    start trading
                  </a>
                  <button className="bg-black md:text-sm lg:text-base text-white md:px-2 lg:px-4 py-0.5 rounded-lg hover:bg-gray-800 inline-flex items-center gap-1">
                    <Image
                      src="/header/header-logo.svg"
                      alt="Trading Servers"
                      className="h-5 w-5"
                      width={12}
                      height={12}
                    />
                    deploy server
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                        fill="#0F1729"
                      ></path>{" "}
                    </g>
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden h-full w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["Brokers", "Features", "Pricing", "Examples", "GitHub"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
            <div className="px-5 pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Image
                    src="/header/header-github.svg"
                    alt="GitHub"
                    width={16}
                    height={16}
                  />
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Image
                    src="/header/header-x.svg"
                    alt="X"
                    width={16}
                    height={16}
                  />
                </a>
              </div>
              <a
                href="#"
                className="block py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900"
              >
                Login
              </a>
              <a
                href="#"
                className="block py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900"
              >
                Start trading
              </a>
              <button className="mt-3 w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 inline-flex items-center justify-center gap-1">
                <Image
                  src="/header/header-logo.svg"
                  alt="Trading Servers"
                  className="h-5 w-5"
                  width={12}
                  height={12}
                />
                deploy server
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
