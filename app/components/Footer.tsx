import Image from "next/image"
import React from "react"

const Footer = () => {
  return (
    <footer className="text-gray-300 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="flex flex-col items-start justify-between mb-4">
            <div className="flex flex-col">
              <div className="flex items-center space-x-4 text-red-500">
                <span className="w-5 h-5">▲</span>
                <span>© 2024</span>
              </div>
              <div className="flex items-center space-x-4 text-blue-500">
                <span className="w-5 h-5 ml-1">●</span>
                <span>All systems normal.</span>
              </div>
            </div>
            <div className="flex space-x-4 ml-2">
              <a href="#" className="text-gray-400 hover:text-white">
                <Image
                  src="/footer/footer-github.svg"
                  alt="footerlogo"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Image
                  src="/footer/footer-x.svg"
                  alt="footerlogo"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-red-500 font-semibold mb-3">Client Menu</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Client Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Open a Support Ticket
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Manage Billing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Manage Billing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Manage Billing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-red-500 font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Templates
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-red-500 font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Next.js Conf
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-red-500 font-semibold mb-3">Preferences</h3>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">
                <Image
                  src="/footer/footer-moon.svg"
                  alt="footerlogo"
                  width={16}
                  height={16}
                />
              </span>
              <div className="w-12 h-6 bg-gray-700 rounded-full p-1 flex items-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-gray-400">
                <Image
                  src="/footer/footer-desktop.svg"
                  alt="footerlogo"
                  width={16}
                  height={16}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="pt-2">
          <p className="text-xs text-gray-500 mb-4">
            Caution: Trading involves risk (including Futures and Forex) and is
            not suitable for every investor. An investor could potentially lose
            all or more than the initial investment. QuantVPS.com does not
            guarantee the profitability of trades executed on its systems. You
            are responsible for your financial decisions and we assume zero
            liability for money made or lost as a result of using our services.
            Only risk capital should be used for trading and only those with
            sufficient risk capital should consider trading.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
