import React from "react"

export default function RelatedProducts() {
  const products = [
    "MT4 VPS",
    "TradeStation VPS",
    "cTrader VPS",
    "FTMO VPS",
    "IC Markets VPS",
  ]

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          Other Product Recommendations Related to NinjaTrader VPS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#262329] rounded-sm px-4 py-8 text-center transition duration-300"
            >
              <p className="text-primary font-medium">{product}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
