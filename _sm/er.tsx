   <section className="bg-white py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Event Gallery</h2>
                            <p className="text-gray-600">Moments from our programs across Africa</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                            {galleryImages.slice(0, 4).map((image) => (
                                <div
                                    key={image.id}
                                    className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center"
                                >
                                    {/* <div className="text-gray-400 text-6xl">🖼️</div> */}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center gap-2">
                            {[0, 1, 2, 3].map((idx) => (
                                <button
                                    key={idx}
                                    className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-emerald-600' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>