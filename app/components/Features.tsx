import Image from "next/image"
import React from "react"

export default function Features() {
  const FeatureCard = ({ icon, title, description }: any) => (
    <div className="bg-[#262329] p-4 md:py-4 rounded-lg shadow-lg flex flex-col md:flex-row justify-center items-center border-[1px] border-white">
      <Image
        alt="feature-icon"
        src={icon}
        width={120}
        height={100}
        className="block md:hidden"
      />
      <Image
        alt="feature-icon"
        src={icon}
        width={180}
        height={160}
        className="hidden md:block"
      />

      <div className="text-center md:text-start md:pr-4">
        <h3 className="text-white font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  )
  const ninjaFeatures = [
    {
      icon: "/features/features-1.png",
      title: "99.99% Uptime Guarantee",
      description:
        "QuantVPS built the infrastructure on the backbone of institutional-grade datacenter, ensuring robust performance and reliability with a 99.9% Service Level Agreement (SLA). You can rely on uninterrupted access to trading platforms. Execute trades whenever, wherever.",
    },
    {
      icon: "/features/features-2.png",
      title: "Enhanced Cybersecurity",
      description:
        "Enhanced firewalls for DDOS Protection, enhanced encryption, and biometrics / key cards to protect physical hardware within a Tier-1 Data Center facility.",
    },
    {
      icon: "/features/features-3.png",
      title: "24/7 Technical Support",
      description:
        "We offer 24/7 technical support to assist with any inquiry, issue, or question that may arise when using our NinjaTrader servers. We can assist with setup, configuration and troubleshooting. Our team of experts is on stand-by to ensure a hassle-free experience.",
    },
    {
      icon: "/features/features-4.png",
      title: "Competitive Pricing",
      description:
        "QuantVPS invests, owns and operates hardware. Our approach allows us to maintain full control over pricing, specifications, and reliability – all while passing the savings to our traders. Our cheap forex VPS solutions are for traders of all sizes.",
    },
    {
      icon: "/features/features-5.png",
      title: "Low Latency to Brokers",
      description:
        "Our NinjaTrader VPS provides ultra-low latency connectivity to trading servers, ensuring instant trade execution by executing directly in our Chicago Datacenter Location. Our Forex VPS Hosting provides the ultimate connection.",
    },
    {
      icon: "/features/features-6.png",
      title: "Fully Self-Service Dashboard",
      description:
        "You can now instantly deploy, reboot, and rebuild...all from your self-service dashboard. But, don't worry, our team is here 24/7 should you want to talk to an agent.",
    },
  ]

  return (
    <div className="sm:px-8 mt-16 lg:mt-32">
      <div className="mx-auto w-full">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl md:max-w-5xl lg:max-w-7xl">
            <div className="lg:p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                6 Core Features -{" "}
                <span className="text-red-500">
                  QuantVPS NinjaTrader Servers
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {ninjaFeatures.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
