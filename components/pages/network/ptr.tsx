import { ArrowRight, Globe } from 'lucide-react'

const partnershipModels = [
    {
        title: 'Entrepreneurs & MSMEs',
        description: 'Registeer on the trade Afrika Exchange to access verified suppliers, buyers , and new markets',
    },
    {
        title: 'Trade Facilitation & Logistics',
        description:
            'We work with logistical and business partners to improve trade facilitation, warehousing and customs clearance.',
    },
    {
        title: 'Financial Inclusion & Payments',
        description:
            'In partnership with Finance and Fintech partners, we facilitate access to inclusive payments, trade finance, and digital infrastructure.',
    },
    {
        title: 'Skills Development',
        description:
            'Through the Trade Africa Academy, we train and upskill traders in digital entrepreneurship and e-export readiness.',
    },
    {
        title: 'Market Access & Events',
        description:
            'We curate partnerships like the Trade Africa Market Day and Digital Trade Workshops to connect MSMEs with regional buyers and exporters.',
    },
    {
        title: 'Strategic Partners',
        description:
            'Public, technology, and financial alignment with regional governance and multilateral partners to shape the future of African digital trade.',
    },
]

interface IPillarsItemsProps {
    title: string
    description: string
}

export function ShipItem2(props: IPillarsItemsProps) {
    return (
        <div className="bg-white rounded-xl p-4 w-[420px] shadow-sm hover:shadow-sm transition-shadow">
            {/* Icon */}

            <h3 className="text-sm font-bold text-black mb-3 ">{props.title}</h3>
            <p className="text-gray-500 font-semibold mb-2  text-sm leading-relaxed">{props.description}</p>
            <a
                href={""}
                className="
                        inline-flex 
                        items-center 
                        text-green-600 
                        hover:text-green-700 
                        transition-colors 
                        font-medium
                        text-sm
                    "
            >
                Become Mentor
                <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            {/* <div className="w-6 h-6 bg-orange-700 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
            </div> */}

            {/* Title */}

            {/* Description */}
        </div>
    )
}

export default function Ptr() {
    return (
        <section className="bg-[#e6f2ed] py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48 2xl:py-56 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
            <div className="max-w-[1600px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                        Who Can Join
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        We collaborate across multiple levers to drive sustainable trade ecosystems and achieve mutual
                        impact.
                    </p>
                </div>

                {/* Partnership Items */}
                <div className="flex flex-wrap gap-4  items-center justify-center">
                    {partnershipModels.map((model, index) => (
                        <ShipItem2 key={index} title={model.title} description={model.description} />
                    ))}
                </div>
            </div>
        </section>
    )
}
