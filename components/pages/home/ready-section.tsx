import React from 'react'

interface ReadySectionProps {
    onGetInvolved?: () => void
    onBecomePartner?: () => void
}

const TradeReadySection: React.FC<ReadySectionProps> = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-2">
            <div className="w-full max-w-6xl">
                <div className="relative overflow-hidden rounded-3xl bg-emerald-600 shadow-2xl">
                   
                    {/* Content */}
                    <div className="relative z-10 px-8 py-10 md:px-8 md:py-14 lg:px-12 lg:py-24">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Ready to Transform Your
                                <br />
                                <span className="bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
                                    Trade Operations?
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-emerald-50/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Join Africa's most integrated trade ecosystem. Partner with us or join our network
                                today.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button
                                    
                                    className="group relative px-8 py-4 bg-white text-emerald-700 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                >
                                    <span className="relative z-10">Get Involved</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </button>

                                <button
                                    
                                    className="group relative px-8 py-4 bg-emerald-800/50 text-white rounded-xl font-semibold text-lg border-2 border-emerald-300/30 hover:border-emerald-300/60 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    <span className="relative z-10">Become a Partner</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom decorative wave */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
            </div>
        </section>
    )
}

export default TradeReadySection
