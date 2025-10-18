"use client"


import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import ProgramsEventsHero from '@/components/pages/programs&events/heroSection'

// Types
interface Program {
    id: number
    title: string
    description: string
    image: string
    link: string
}

interface Event {
    id: number
    date: string
    month: string
    title: string
    location: string
    time: string
    category: string
    spotsLeft: number
}

interface Testimonial {
    id: number
    quote: string
    author: string
    role: string
    company: string
    avatar: string
}

interface GalleryImage {
    id: number
    url: string
    alt: string
}

// Sample Data
const programs: Program[] = [
    {
        id: 1,
        title: 'Market Access',
        description: 'Gain opportunities to verified buyers and suppliers worldwide.',
        image: '/images/market-access.jpg',
        link: '#',
    },
    {
        id: 2,
        title: 'Digital Trade Workshops',
        description: 'Hands-on sessions to get MSME trade ready.',
        image: '/images/workshops.jpg',
        link: '#',
    },
    {
        id: 3,
        title: 'SME Spotlights',
        description: 'Stories of MSMEs growth and cross-border success.',
        image: '/images/spotlights.jpg',
        link: '#',
    },
]

const events: Event[] = [
    {
        id: 1,
        date: '12',
        month: 'NOV',
        title: 'Advanced E-Commerce Logistics',
        location: 'Accra',
        time: '10:00 AM - 1:00 PM',
        category: 'Webinar',
        spotsLeft: 12,
    },
    {
        id: 2,
        date: '12',
        month: 'NOV',
        title: 'Advanced E-Commerce Logistics',
        location: 'Accra',
        time: '10:00 AM - 1:00 PM',
        category: 'Webinar',
        spotsLeft: 12,
    },
    {
        id: 3,
        date: '12',
        month: 'NOV',
        title: 'Advanced E-Commerce Logistics',
        location: 'Accra',
        time: '10:00 AM - 1:00 PM',
        category: 'Webinar',
        spotsLeft: 12,
    },
    {
        id: 4,
        date: '12',
        month: 'NOV',
        title: 'Advanced E-Commerce Logistics',
        location: 'Accra',
        time: '10:00 AM - 1:00 PM',
        category: 'Webinar',
        spotsLeft: 12,
    },
]

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: 'Market day connected us with three major buyers in one afternoon. We closed deals worth $50K in the spot.',
        author: 'James Ofosuani',
        role: 'CEO',
        company: 'Agro Exports Ghana',
        avatar: '/images/avatar1.jpg',
    },
    {
        id: 2,
        quote: 'The Digital Trade Workshop demystified cross-border trade compliance and gave confidence to it headfirst.',
        author: 'James Ofosu',
        role: 'Founder',
        company: 'Tech Innovations Ltd',
        avatar: '/images/avatar2.jpg',
    },
]

const galleryImages: GalleryImage[] = [
    { id: 1, url: '/images/gallery1.jpg', alt: 'Event photo 1' },
    { id: 2, url: '/images/gallery2.jpg', alt: 'Event photo 2' },
    { id: 3, url: '/images/gallery3.jpg', alt: 'Event photo 3' },
    { id: 4, url: '/images/gallery4.jpg', alt: 'Event photo 4' },
]

// Components
const ProgramCard: React.FC<Program> = ({ title, description, image, link }) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48 bg-gradient-to-br from-orange-400 to-orange-600">
            {/* Placeholder for image */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">🌍</div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-normal text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <a href={link} className="text-emerald-600 font-medium hover:text-emerald-700 inline-flex items-center">
                Learn More →
            </a>
        </div>
    </div>
)

const EventCard: React.FC<Event> = ({ date, month, title, location, time, category, spotsLeft }) => (
    <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-6">
            <div className="bg-emerald-50 rounded-lg p-4 text-center min-w-[80px]">
                <div className="text-emerald-600 font-bold text-2xl">{date}</div>
                <div className="text-emerald-600 text-sm font-medium">{month}</div>
            </div>
            <div>
                <span className="inline-block bg-emerald-600 text-white text-xs px-3 py-1 rounded-full mb-2">
                    {category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <div className="flex gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {location}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {time}
                    </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{spotsLeft} spots left. Register early.</p>
            </div>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
            Register
        </button>
    </div>
)

const TestimonialCard: React.FC<Testimonial> = ({ quote, author, role, company, avatar }) => (
    <div className="bg-transparent rounded-lg p-8 ">
        <p className="text-black text-lg mb-6 italic">&ldquo;{quote}&rdquo;</p>
        <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">👤</div>
            <div>
                <h4 className="font-semibold text-gray-900">{author}</h4>
                <p className="text-sm text-gray-600">
                    {role}, {company}
                </p>
            </div>
        </div>
    </div>
)

const ProgramsEventsPage: React.FC = () => {
    const [testimonialIndex, setTestimonialIndex] = useState(0)
    const [galleryIndex, setGalleryIndex] = useState(0)
    const [activeFilter, setActiveFilter] = useState('All')

    const filters = ['All', 'Workshops', 'Webinars', 'General']

    const nextTestimonial = () => {
        setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <>
            <Head>
                <title>Programs & Events | Digital Trade Platform</title>
                <meta name="description" content="Practical resources allowing West trade readiness across Africa" />
            </Head>

            <div className="min-h-screen bg-[#e6f2ed]">
                {/* Hero Section */}
              <ProgramsEventsHero/>

                {/* Our Programs */}
                <section className="py-20 px-4 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Our Programs</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Enabling capacity and connections across West to East ecosystem.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {programs.map((program) => (
                                <ProgramCard key={program.id} {...program} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Upcoming Events */}
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
                        </div>

                        {/* Calendar Embed Placeholder */}
                        <div className="bg-white rounded-lg p-16 text-center mb-12 h-[500px] shadow-sm">
                            <Calendar size={64} className="mx-auto text-gray-400 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                External calendar embed placeholder.
                            </h3>
                        </div>

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

                {/* Customer Testimonials */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Customer testimonials</h2>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="relative max-w-4xl mx-auto">
                            <TestimonialCard {...testimonials[testimonialIndex]} />
                            <div className="flex justify-center gap-2 mt-6">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setTestimonialIndex(idx)}
                                        className={`w-2 h-2 rounded-full transition-colors ${
                                            idx === testimonialIndex ? 'bg-emerald-600' : 'bg-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 right-auto">
                                <button
                                    onClick={prevTestimonial}
                                    className="bg-transparent text-black hover:bg-gray-50 p-2 rounded-full shadow-sm border border-gray-200"
                                >
                                    <ChevronLeft size={24}  />
                                </button>
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
                                <button
                                    onClick={nextTestimonial}
                                    className="bg-transparent text-black hover:bg-gray-50 p-2 rounded-full shadow-sm border border-gray-200"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Event Gallery */}
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

                {/* CTA Section */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-[#055A35] rounded-2xl p-12 text-center text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Ready to Transform Your
                                <br />
                                Trade Operations?
                            </h2>
                            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                                Join thousands of businesses already expanding their reach and all trade processes.
                            </p>
                            <div className="flex gap-4 justify-center flex-wrap">
                                <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors">
                                    Get Envolved
                                </button>
                                <button className="bg-transparent hover:bg-emerald-600 text-white px-8 py-3 rounded-md font-medium border-2 border-white transition-colors">
                                    Become a Partner
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ProgramsEventsPage
