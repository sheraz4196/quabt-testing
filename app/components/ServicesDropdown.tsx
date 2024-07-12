"use client"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid"

import React, { useState } from "react"

export default function ServicesDropdown() {
  const [expandedFeature, setExpandedFeature] = useState("Ultra Low Latency")
  const features = [
    {
      title: "Ultra Low Latency",
      description:
        "Implement your trading systems on our reliable trading servers collocated within a millisecond of data feeds, brokers, exchanges, and liquidity providers. We offer hardware powerful enough to facilitate throughput of thousands of orders per second at sub-millisecond latency.",
    },
    {
      title: "100% Uptime Guarantee SLA",
      description: "We guarantee 100% uptime for our services.",
    },
    {
      title: "Latest Generation Technology",
      description: "We use the most recent and advanced technology available.",
    },
    {
      title: "24/7 Support, US-Based Support",
      description: "Round-the-clock support from our US-based team.",
    },
    {
      title: "High-Powered Hardware",
      description: "Top-of-the-line hardware to support your trading needs.",
    },
    {
      title: "QuantVPS in Action",
      description: "See how our VPS performs in real-world scenarios.",
    },
    {
      title: "Rock Solid Stability",
      description: "Our systems are designed for maximum stability.",
    },
    {
      title: "Facilitating Global Best Execution",
      description: "Optimize your trades across global markets.",
    },
    {
      title: "Max Security",
      description: "State-of-the-art security measures to protect your data.",
    },
    {
      title: "Enterprise Grade Datacenter",
      description: "Your systems are housed in top-tier datacenters.",
    },
    {
      title: "Trade Any Platform",
      description: "Compatible with all major trading platforms.",
    },
    {
      title: "Cutting-Edge Technology",
      description: "Always at the forefront of technological advancements.",
    },
    {
      title: "Summary",
      description: "A comprehensive overview of our services.",
    },
  ]
  const toggleFeature = (title: string) => {
    setExpandedFeature(expandedFeature === title ? "" : title)
  }

  return (
    <div className="sm:px-8 mb-8 mt-16 lg:mb-16 lg:mt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 ">
          <div className="mx-auto max-w-2xl md:max-w-7xl xl:min-w-[1150px]">
            <h2 className="text-3xl md:text-4xl text-center font-semibold mb-6">
              Included In Your Service
            </h2>
            <div className="flex flex-col justify-center items-stretch gap-10 lg:gap-20">
              <div className=" text-white md:p-4 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 place-content-between gap-4 md:gap-8 lg:gap-10">
                  <div>
                    {features.slice(0, 6).map((feature) => (
                      <div
                        key={feature.title}
                        className="mb-4 border-b border-white pb-4"
                      >
                        <button
                          className="flex justify-between items-center w-full text-left"
                          onClick={() => toggleFeature(feature.title)}
                        >
                          <span>{feature.title}</span>
                          <span>
                            {expandedFeature === feature.title ? (
                              <ChevronUpIcon
                                color="white"
                                width={20}
                                height={20}
                              />
                            ) : (
                              <ChevronDownIcon
                                color="white"
                                width={20}
                                height={20}
                              />
                            )}
                          </span>
                        </button>
                        {expandedFeature === feature.title && (
                          <p className="mt-2 text-sm">{feature.description}</p>
                        )}
                        {feature.title === "Ultra Low Latency" && (
                          <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded">
                            Check Broker Latency
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <div>
                    {features.slice(6).map((feature) => (
                      <div
                        key={feature.title}
                        className="mb-4 border-b border-white pb-4"
                      >
                        <button
                          className="flex justify-between items-center w-full text-left"
                          onClick={() => toggleFeature(feature.title)}
                        >
                          <span>{feature.title}</span>
                          <span>
                            {expandedFeature === feature.title ? (
                              <ChevronUpIcon
                                color="white"
                                width={20}
                                height={20}
                              />
                            ) : (
                              <ChevronDownIcon
                                color="white"
                                width={20}
                                height={20}
                              />
                            )}
                          </span>
                        </button>
                        {expandedFeature === feature.title && (
                          <p className="mt-2 text-sm">{feature.description}</p>
                        )}
                      </div>
                    ))}
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
