'use client'

import React from 'react'

interface ReadySectionProps {
    onGetInvolved?: () => void
    onBecomePartner?: () => void
}

const TradeReadySection: React.FC<ReadySectionProps> = ({ onGetInvolved, onBecomePartner }) => {
    return (
        <section className="h-[644px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48 py-12">
            <div className="w-full max-w-6xl">
                <div className="relative overflow-hidden rounded-3xl bg-[#057e48] shadow-2xl">
                   
                    {/* Content */}
                    <div className="relative z-10 px-6 py-10 sm:px-8 sm:py-14 md:px-12 md:py-20 lg:px-16 lg:py-24">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                                Ready to Transform Your
                                <br />
                                <span className="text-white">
                                    Trade Operations?
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-emerald-50/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Partner with us or join Africa's most integrated digital trade ecosystem today. Together we can build a borderless, inclusive and prosperous Africa.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button
                                    onClick={onGetInvolved}
                                    className="group relative w-full sm:w-auto px-8 py-4 bg-white text-emerald-700 rounded-xl font-semibold text-lg sm:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                >
                                    <span className="relative z-10">Get Involved</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </button>

                                <button
                                    onClick={onBecomePartner}
                                    className="group relative w-full sm:w-auto px-8 py-4 bg-emerald-800/50 text-white rounded-xl font-semibold text-lg sm:text-xl hover:border-emerald-300/60 backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300"
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
