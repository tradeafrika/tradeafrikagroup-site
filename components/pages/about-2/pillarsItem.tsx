import { Globe } from 'lucide-react'

interface IPillarsItemsProps {
    title: string
    description: string
}

export default function PillarsItem(props: IPillarsItemsProps) {
    return (
        <div className="bg-white rounded-xl p-4 w-[420px] shadow-sm hover:shadow-sm transition-shadow">
            {/* Icon */}
            <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
            </div>
            <p className="text-black font-semibold mb-2  text-sm leading-relaxed">{props.description}</p>

            {/* Title */}
            <h3 className="text-sm font-light text-black mb-3 ">{props.title}</h3>

            {/* Description */}
        </div>
    )
}
