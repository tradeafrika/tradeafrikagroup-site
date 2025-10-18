import { Check } from "lucide-react"

export default function WhyJK() {
    const benefits = [
        'Pan-African reach and visibility',
        'Brand alignment with AfCFTA 2063',
        'Participation in impactful programs',
        'Access to trade data and insights',
        'Policy influence and ecosystem engagement',
    ]
    return (
        <section className="py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48 2xl:py-56 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48 bg-white">
            <div className="max-w-[1600px] mx-auto">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 sm:mb-12 text-center md:text-left leading-tight">
                    Partner With Us
                </h2>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
                    {/* Left Text Column */}
                    <div>
                        <p className="text-gray-700 text-base sm:text-lg md:text-xl xl:text-2xl leading-relaxed mb-6 sm:mb-8">
                            We're not just building a platform; we're building Africa's digital trade economy. By
                            partnering with Trade Africa, you're joining a Pan-African movement that empowers MSMEs,
                            connects markets, and strengthens value chains across borders.
                        </p>
                    </div>

                    {/* Right Benefits Card */}
                    <div className="space-y-4 sm:space-y-5 md:space-y-6 bg-[#fcebea] p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl shadow-sm">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3 sm:gap-4">
                                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 flex-shrink-0 mt-1" />
                                <span className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                                    {benefit}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
