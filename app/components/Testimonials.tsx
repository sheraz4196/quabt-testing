import { StarIcon } from "@heroicons/react/20/solid"
import Image from "next/image"
import React from "react"

export default function Testimonials() {
  return (
    <div className="sm:px-8">
      <div className="mx-auto w-full max-w-7xl lg:px-8 py-4 md:py-12">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              Customer Reviews of QuantVPS NinjaTrader VPS Servers
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-md p-4 bg-[#262329] text-card-foreground shadow dark:bg-card">
                <cite className="mb-2 flex items-center not-italic">
                  <Image
                    alt="Boat Builder avatar"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    className="h-8 w-8 min-w-[32px] rounded-full border border-primary/10 bg-primary/20 object-cover shadow pr-2"
                    // style="color: transparent"

                    src="/profile-img-1.png"
                  />
                  <div>
                    <p className="text-sm font-semibold">Ernest</p>
                    <p className="text-xs">NQ Trader</p>
                  </div>
                </cite>
                <div className="mb-2 flex">
                  <StarIcon width={16} height={16} color="#eab308" />
                  <StarIcon width={16} height={16} color="#eab308" />
                  <StarIcon width={16} height={16} color="#eab308" />
                  <StarIcon width={16} height={16} color="#eab308" />
                  <StarIcon width={16} height={16} color="#eab308" />
                </div>
                <header className="mb-2 font-bold"></header>
                <blockquote className="whitespace-pre-line text-sm">
                  QuantVPS was able to deliver unbeatable customer support +
                  servers.{" "}
                  <span className="text-[#eab308] font-semibold">
                    If there is provider I have confidence in running my
                    strategies with, It is QuantVPS.
                  </span>
                </blockquote>
              </div>
              <div className="rounded-md p-4 bg-[#262329] text-card-foreground shadow dark:bg-card">
                <cite className="mb-2 flex items-center not-italic">
                  <Image
                    alt="Boat Builder avatar"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    className="h-8 w-8 min-w-[32px] rounded-full border border-primary/10 bg-primary/20 object-cover shadow pr-2"
                    // style="color: transparent"

                    src="/profile-img-2.png"
                  />
                  <div>
                    <p className="text-sm font-semibold">Johan Steneros</p>
                    <p className="text-xs">CEO at Bravemark</p>
                  </div>
                </cite>
                <div className="mb-2 flex">
                  <StarIcon width={16} height={16} color="#eab308" />
                  <StarIcon width={16} height={16} color="#eab308" />
                  <StarIcon width={16} height={16} color="#eab308" />
                  <StarIcon width={16} height={16} color="#eab308" />
                  <StarIcon width={16} height={16} color="#eab308" />
                </div>
                <header className="mb-2 font-bold"></header>
                <blockquote className="whitespace-pre-line text-sm">
                  Ilias was super quick and helpful in providing quality SEO
                  tips for our website.{" "}
                  <span className="text-[#eab308] font-semibold">
                    Great stuff.
                  </span>
                </blockquote>
              </div>
              <div className="rounded-md p-4 bg-[#262329] text-card-foreground shadow dark:bg-card">
                <cite className="mb-2 flex items-center not-italic">
                  <Image
                    alt="Boat Builder avatar"
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    className="h-8 w-8 min-w-[32px] rounded-full border border-primary/10 bg-primary/20 object-cover shadow pr-2"
                    // style="color: transparent"

                    src="/profile-img-3.png"
                  />
                  <div>
                    <p className="text-sm font-semibold">Said Aitmbarek</p>
                    <p className="text-xs">Founder at Stimpack</p>
                  </div>
                </cite>
                <div className="mb-2 flex">
                  <StarIcon width={16} height={16} color="#eab308" />
                  <StarIcon width={16} height={16} color="#eab308" />
                  <StarIcon width={16} height={16} color="#eab308" />
                  <StarIcon width={16} height={16} color="#eab308" />
                  <StarIcon width={16} height={16} color="#eab308" />
                </div>
                <header className="mb-2 font-bold"></header>
                <blockquote className="whitespace-pre-line text-sm">
                  <span className="text-[#eab308] font-semibold">
                    Invaluable SEO recommendations!
                  </span>
                  Helped us a lot to identify our SEO potential for improvement.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
