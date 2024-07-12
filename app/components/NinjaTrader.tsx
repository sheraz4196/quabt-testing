import { CheckCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import React from "react"

export default function NinjaTrader() {
  return (
    <div className="relative bg-neutral-900 text-white bg-[url('/ninjatrader.png')] bg-cover bg-no-repeat bg-center">
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative container mx-auto px-4 lg:px-8 py-16 md:py-24 max-w-7xl flex ">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            NinjaTrader VPS Hosting, Low-Latency Futures and Forex Trading
          </h1>

          <p className="text-sm md:text-base mb-8">
            QuantVPS offers NinjaTrader VPS Hosting and provides traders
            high-performance compute optimized for running the NinjaTrader
            software on our Windows Server 2016, 2019, or 2022 servers. We offer
            low-latency (~1ms) connectivity for instant order execution, 99.9%
            uptime, and a helpful support team. Enhance your order execution and
            instantly deploy a server now!
          </p>
          <ul className="mb-8">
            <li className="flex items-center mb-2 gap-1">
              <CheckCircleIcon width={20} height={20} />
              24/7 Uptime
            </li>
            <li className="flex items-center mb-2 gap-1">
              <CheckCircleIcon width={20} height={20} />
              Free Around-The-Clock Tech Support
            </li>
            <li className="flex items-center gap-1">
              <CheckCircleIcon width={20} height={20} />
              Optimized for NinjaTrader
            </li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <button className="bg-black text-white px-6 py-2 border border-primary rounded-lg font-semibold  transition duration-300">
              NinjaTrader VPS
            </button>
            <button className="bg-primary/80 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary transition duration-300">
              Download NinjaTrader
            </button>
          </div>
        </div>
        {/* <h2 className="text-2xl md:text-3xl lg:text-5xl tracking-wide text-orange-500 font-bold mb-6 hidden md:block">
          NINJATRADER
        </h2> */}
        <div className="absolute right-0 md:right-0 top-6 lg:top-28 mb-6">
          <Image
            className="w-full h-6 md:h-8 xl:h-10"
            src="/ninjattrader-logo.png"
            alt="NinjaTrader Logo"
            width={300}
            height={100}
          />
        </div>
      </div>
    </div>
  )
}
