import React from "react"

const steps = [
  {
    number: 1,
    title: "Deploy Server",
    description:
      "Determine how many strategies and/or indicators you will be running on your NinjaTrader VPS. Fewer strategies require less, whereas more strategies require higher CPU, RAM, and Storage limits. Once payment is completed, your server will being to provision in our Chicago datacenter.",
  },
  {
    number: 2,
    title: "Download NinjaTrader",
    description:
      'Once you have successfully logged into your VPS with the instructions and credentials provided in the user dashboard, visit the Official NinjaTrader Website and navigate to the "Downloads" section. Choose the NT8 and start the download process. If you would like assistance, contact us by live chat within the userdashboard.',
  },
  {
    number: 3,
    title: "Configure Trading Environment",
    description:
      "Deploying the VPS and downloading NinjaTrader should only take a few minutes. You can now drag and drop your strategy files into the VPS and begin running your algorithmic trading strategies. Experience the advantage of our industry-leading technology. Get QuantVPS.",
  },
]

export default function SetupGuide() {
  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          How to Setup NinjaTrader VPS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2 underline underline-offset-4">
                {step.number}. {step.title}
              </h3>
              <p className="text-gray-300 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
