import {
  ArrowRightIcon,
  MagnifyingGlassIcon,
  StarIcon,
} from "@heroicons/react/20/solid"
import Image from "next/image"
import React from "react"

export default function Review() {
  return (
    <div className="sm:px-8 mb-8 mt-16 lg:mb-16 lg:mt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8 ">
        <div className="relative px-4 sm:px-8 lg:px-12 ">
          <div className="mx-auto max-w-2xl lg:max-w-5xl bg-[url('/background-gradient.avif')] bg-contain bg-no-repeat bg-left">
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-col items-start justify-center gap-10 lg:flex-row lg:gap-20">
                <div className="relative w-full lg:w-1/2">
                  <div className="sm:mt-16 ">
                    <p className="py-2 text-center text-lg sm:-rotate-1 lg:pt-8">
                      “The <b>fastest servers </b>for <b>NT8</b>”
                    </p>
                    <div className="relative mx-auto rounded-xl border border-foreground/5 bg-foreground/5 p-1.5 sm:-rotate-1 ">
                      <Image
                        className="w-full rounded-lg border border-foreground/10 shadow-md"
                        src="/review-image.png"
                        width={256}
                        height={256}
                        alt="review image"
                      />
                    </div>
                    <div className="flex items-center justify-between px-6 py-4 sm:-rotate-1">
                      <div>
                        <div className="text-xl font-bold leading-none">
                          Rusev S.
                        </div>
                        <div className="font-medium text-muted-foreground">
                          ES / NQ Trader
                        </div>
                      </div>
                      <div className="mb-1 flex">
                        <StarIcon width={16} height={16} color="#eab308" />
                        <StarIcon width={16} height={16} color="#eab308" />
                        <StarIcon width={16} height={16} color="#eab308" />
                        <StarIcon width={16} height={16} color="#eab308" />
                        <StarIcon width={16} height={16} color="#eab308" />
                      </div>
                    </div>
                    <div className="space-y-1 backdrop-blur-[2px] rounded-lg p-4 shadow relative z-10 sm:-rotate-1">
                      <div className="flex items-center justify-between py-0.5">
                        <div className="flex flex-1 items-center gap-2 text-left">
                          <MagnifyingGlassIcon
                            width={16}
                            height={16}
                            color="#8ab4f8"
                          />
                          <span className="flex-1 truncate font-medium">
                            <span>Automatic Backups</span>
                          </span>
                        </div>
                        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-green-500 text-xs font-black text-white">
                          1
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-0.5">
                        <div className="flex flex-1 items-center gap-2 text-left">
                          <MagnifyingGlassIcon
                            width={16}
                            height={16}
                            color="#8ab4f8"
                          />
                          <span className="flex-1 truncate font-medium">
                            <span>24/7 Uptime</span>
                          </span>
                        </div>
                        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-green-500 text-xs font-black text-white">
                          1
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-0.5">
                        <div className="flex flex-1 items-center gap-2 text-left">
                          <MagnifyingGlassIcon
                            width={16}
                            height={16}
                            color="#8ab4f8"
                          />
                          <span className="flex-1 truncate font-medium">
                            <span>Access from iPhone and Android</span>
                          </span>
                        </div>
                        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-green-500 text-xs font-black text-white">
                          2
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="relative mt-[-2rem] space-y-5 lg:space-y-8 md:mt-0 lg:mt-16 xl:mt-24">
                    <span className="hidden text-xs font-bold uppercase leading-tight text-violet-500 dark:text-violet-400 sm:inline-block">
                      Our servies are the best
                    </span>

                    <p className="lg:text-lg">
                      Rusev can now continue to travel while his strategies run
                      safely on his server in Chicago. Rusev checks his
                      strategies daily on his mobile phone, and backtests from
                      his laptop by logging into the server remotely.
                    </p>
                    <p className="lg:text-lg">
                      <b>
                        Rusev eliminated the stress of always having to be near
                        his PC, without having to worry about the headaches that
                        come operating servers.
                      </b>
                    </p>

                    <div className="block rounded-xl bg-[#1e1a26] p-4 text-sm font-medium ">
                      <b className="block text-lg">
                        We help traders focus on trading
                      </b>
                      We did it for Rusev and we can do it for you too!
                      <a
                        className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border border-primary bg-primary px-4 py-2 text-sm font-bold  shadow-md outline outline-1 outline-offset-[-2px] outline-primary/30 transition-all duration-150 ease-in-out hover:bg-primary/90 hover:shadow-lg"
                        href="/services"
                      >
                        Deploy NinjaTrader VPS
                        <ArrowRightIcon width={16} height={16} />
                      </a>
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
