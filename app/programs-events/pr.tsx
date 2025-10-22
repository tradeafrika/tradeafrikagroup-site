 <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                                See upcoming Market days, workshops, and trade-ins across each locale.
                            </p>
                            <div className="flex gap-3 justify-center flex-wrap">
                                {filters.map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => setActiveFilter(filter)}
                                        className={`px-6 py-2 rounded-md font-medium transition-colors ${
                                            activeFilter === filter
                                                ? 'bg-emerald-600 text-white'
                                                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                                        }`}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                            {/* <CalendarSection/> */}
                        </div>

                        {/* Calendar Embed Placeholder */}
                        {/* <div className="bg-white rounded-lg p-16 text-center mb-12 h-[500px] shadow-sm">
                            <Calendar size={64} className="mx-auto text-gray-400 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                External calendar embed placeholder.
                            </h3>
                        </div> */}

                        {/* Next Scheduled Events */}
                        <div className="mb-8 mt-12 flex items-center flex-col justify-center">
                            <h3 className="text-4xl font-bold text-gray-900 mb-6">Next Scheduled Events</h3>
                            <div className="space-y-4 w-full">
                                {events.map((event) => (
                                    <EventCard key={event.id} {...event} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>