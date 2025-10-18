import React from 'react'
import { Linkedin, Twitter, Dribbble } from 'lucide-react'
import TeamSectionsItem from './team-section-item'

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
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-2xl md:text-5xl font-light mb-12 text-black">Our Leadership</h2>

                {/* Team grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {teamMembers.map((member, index) => (
                        <TeamSectionsItem member={member} key={index}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurTeamSection
