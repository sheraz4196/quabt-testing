import { CheckCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import React from "react"

export default function Hero() {
  return (
    <div className="sm:px-8 bg-[url('/background-gradient.avif')] bg-contain bg-no-repeat bg-center">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="sm:px-8 relative pb-16 pt-16">
          <div className="absolute right-0 md:right-0 top-6 mb-6">
            <Image
              className="w-full h-6 md:h-8 xl:h-10"
              src="/ninjattrader-logo.png"
              alt="NinjaTrader Logo"
              width={300}
              height={100}
            />
          </div>

          <div className="mx-auto w-full max-w-7xl lg:px-8 ">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="relative z-10 mx-auto mb-8 max-w-xl text-center">
                  <h1 className="mb-4 text-sm font-black">
                    Low-Latency Futures and Forex Trading
                  </h1>
                  <div className="mb-10 text-balance text-4xl font-bold tracking-tight md:text-6xl">
                    NinjaTrader 8 VPS Hosting
                  </div>
                  <p className="mb-8 text-balance text-lg text-zinc-800 dark:text-zinc-200">
                    Our{" "}
                    <span className="font-bold">
                      NinjaTrader VPS Hosting {""}
                    </span>
                    offers unparalled, high-performance compute optimized for
                    running NT8.<b> Instantly</b> deploy a Windows Server for
                    Futures Trading and Forex Trading.
                  </p>
                  <div className="mb-8 inline-flex items-center justify-center gap-2">
                    <a
                      href="https://seoroast.org"
                      className="inline-flex h-auto w-fit cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap rounded-2xl border border-primary bg-primary text-lg font-black leading-none shadow-xl outline outline-1 outline-offset-[-2px] outline-primary/30 transition-all duration-150 ease-in-out hover:bg-primary/90"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex items-center justify-center -space-x-2 pl-2 pr-2">
                        <span className="text-red-600 font-bold text-4xl">
                          N
                        </span>
                      </div>
                      <span className=" py-3 pr-4">
                        Get 50% OFF First Month
                      </span>
                    </a>
                  </div>
                  <div>
                    <p className="mb-4 font-bold">
                      Trusted by the best traders in the world
                    </p>
                    <div className="mx-auto flex  flex-col font-bold text-white gap-x-4 gap-y-3 max-w-sm">
                      <div className="flex gap-3 opacity-90 transition hover:opacity-100">
                        <CheckCircleIcon height={24} width={24} />
                        <span>24/7 Uptime</span>
                      </div>
                      <div className="flex gap-3 opacity-90 transition hover:opacity-100">
                        <CheckCircleIcon height={24} width={24} />
                        <span>Free Around-The-Clock Tech Support</span>
                      </div>
                      <div className="flex gap-3 opacity-90 transition hover:opacity-100">
                        <CheckCircleIcon height={24} width={24} />
                        <span>Optimized for NinjaTrader</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
