export default function JoinNetworkHero() {
    return (
        <section className="bg-[#e6f2ed] flex items-center justify-center py-20 sm:py-28 md:py-32 lg:py-40 px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-40">
            <div className="w-full max-w-[1600px] text-center">
                {/* Tagline */}
                <p className="text-green-700 font-semibold uppercase tracking-wide mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
                    Network
                </p>

                {/* Heading */}
                <h1 className="text-green-700 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
                    Join the Network
                    <br className="hidden sm:block" />
                    <span className="block sm:inline"> Shaping Africa's Digital trade future</span>
                </h1>

                {/* Description */}
                <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-xl sm:max-w-2xl md:max-w-3xl 2xl:max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0">
                    At Trade Afrika, we believe African success depends on building partnerships that accelerate
                    collaboration. We partner with governments, private sector traders, innovators, and development
                    organizations to build a connected digital trade ecosystem advancing the goals of the AfCFTA and
                    Agenda 2063.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-green-700 hover:bg-green-600 text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded font-semibold text-sm sm:text-base lg:text-lg transition-colors w-full sm:w-auto">
                        Join the Network
                    </button>
                    <button className="bg-white hover:bg-gray-50 text-gray-800 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded font-semibold text-sm sm:text-base lg:text-lg border border-gray-300 transition-colors w-full sm:w-auto">
                        Partner with Us
                    </button>
                </div>
            </div>
        </section>
    )
}
