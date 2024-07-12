"use client"
import { useState } from "react"

const faqData = [
  {
    question:
      "What is the difference between NinjaTrader 7 (NT7) and NinjaTrader 8 (NT8)?",
    answer: "Answer content here",
  },
  {
    question: "Why is running NinjaTrader on a VPS important?",
    answer: "Answer content here",
  },
  {
    question: "What is VPS Hosting for Forex and NinjaTrader?",
    answer: "Answer content here",
  },
  {
    question: "Do you offer dedicated servers for NinjaTrader?",
    answer: "Answer content here",
  },
  {
    question: "What is the latency to brokers on the NinjaTrader VPS?",
    answer: "Answer content here",
  },
  {
    question: "How long does it take to deploy a NinjaTrader VPS?",
    answer: "Answer content here",
  },
  {
    question: "Is your support team knowledgable on the NinjaTrader software?",
    answer: "Answer content here",
  },
  {
    question: "How many trading strategies can I run on my NinjaTrader VPS?",
    answer: "Answer content here",
  },
]

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm sm:text-base">{question}</span>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="pb-4 text-sm text-gray-400">{answer}</p>}
    </div>
  )
}

const FAQs = () => {
  return (
    <div className="sm:px-8 mt-16 lg:mt-32 md:pb-10">
      <div className="mx-auto w-full">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl md:max-w-5xl lg:max-w-7xl">
            <div className="bg-[#262329] text-white border border-white p-4 md:p-6 rounded-[36px] grid md:grid-cols-2">
              <div>
                <h2 className="text-2xl md:text-4xl font-semibold mb-3 md:mb-6 md:ml-3 tracking-wider">
                  FAQ
                </h2>
                <h3 className="text-lg mb-4">About NinjaTrader NT8 VPS</h3>
              </div>
              <div className="space-y-2">
                {faqData.map((item, index) => (
                  <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQs
