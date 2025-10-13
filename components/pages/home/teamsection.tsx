import React from 'react'
import { Linkedin, Twitter, Dribbble } from 'lucide-react'

interface TeamMember {
    name: string
    title: string
    bio: string
    image?: string
}

const OurTeamSection: React.FC = () => {
    const teamMembers: TeamMember[] = [
        {
            name: 'Joshua',
            title: 'CEO',
            bio: '20+ years in agricultural supply chains. Former Director at FAO East Africa, advising on AfCFTA implementation.Fortune 500 companies.',
            image: '/api/placeholder/400/400',
        },
        {
            name: 'Martin Wandera',
            title: 'Product Lead',
            bio: 'Former McKinsey consultant with 15 years in African trade infrastructure. Led regional expansion for 3 Fortune 500 companies.',
            image: '/api/placeholder/400/400',
        },
        {
            name: 'Full name',
            title: 'Job title',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        },
        {
            name: 'Full name',
            title: 'Job title',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        },
    ]

    return (
        <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black">Our team</h2>

                {/* Team grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex flex-col sm:flex-row gap-6">
                                {/* Profile image */}
                                <div className="flex-shrink-0">
                                    <div className="w-48 h-48 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                                                <svg
                                                    className="w-12 h-12 text-gray-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                                    <p className="text-sm text-gray-600 mb-4">{member.title}</p>
                                    <p className="text-gray-700 text-sm leading-relaxed mb-6">{member.bio}</p>

                                    {/* Social icons */}
                                    <div className="flex items-center gap-4">
                                        <a
                                            href="#"
                                            className="text-black hover:text-gray-600 transition-colors"
                                            aria-label="LinkedIn"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a
                                            href="#"
                                            className="text-black hover:text-gray-600 transition-colors"
                                            aria-label="Twitter"
                                        >
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                        <a
                                            href="#"
                                            className="text-black hover:text-gray-600 transition-colors"
                                            aria-label="Dribbble"
                                        >
                                            <Dribbble className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurTeamSection
