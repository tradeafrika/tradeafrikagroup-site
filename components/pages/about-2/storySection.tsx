import React from 'react'

const OurStoryTimeline: React.FC = () => {
    const timelineEvents = [
        {
            date: '2025 • July',
            title: 'Origins',
            description: 'Trade Afrika launched to help MSMEs export beyond borders.',
        },
        {
            date: '2025 • August',
            title: 'Expansion',
            description: 'Formed alliances with regional banks, logistics providers, and AfCFTA-aligned institutions.',
        },
        {
            date: '2026 • March',
            title: 'Innovation',
            description: 'Introduced AI-driven matchmaking for cross-border buyers and sellers.',
        },
        {
            date: '2027 • January',
            title: 'Impact',
            description: 'Reached 10,000+ verified businesses trading across Africa and beyond.',
        },
    ]

    return (
        <section className="bg-white py-12 px-4 sm:px-8 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-28 place-items-center">
                    {/* Left side - Header */}
                    <div className="lg:col-span-4 text-center lg:text-left">
                        {/* <p className="text-sm font-semibold text-gray-900 mb-2">Trusted way</p> */}
                        <h2 className="text-4xl sm:text-4xl md:text-4xl font-normal text-black">Our Story</h2>
                    </div>

                    {/* Right side - Timeline */}
                    <div className="lg:col-span-8 w-full">
                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 ml-[8px]"></div>

                            {/* Timeline items */}
                            <div className="space-y-8">
                                {timelineEvents.map((event, index) => (
                                    <div key={index} className="relative pl-10">
                                        {/* Green dot */}
                                        <div className="absolute left-0 top-2 w-4 h-4 bg-green-700 rounded-full border-4 border-white"></div>

                                        {/* Content card */}
                                        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-sm w-full max-w-full sm:max-w-[500px] md:max-w-[450px]">
                                            <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                                            <h3 className="text-xl font-bold text-black mb-3">{event.title}</h3>
                                            <p className="text-gray-700 text-base leading-relaxed">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurStoryTimeline
