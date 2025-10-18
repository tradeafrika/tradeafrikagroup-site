import { Dribbble, Linkedin, Twitter } from "lucide-react";

interface ITeamSectionItemProps {
    member: any
}

export default function TeamSectionsItem({ member }: ITeamSectionItemProps) {
    return (
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                {/* Profile image */}
                <div className="flex-shrink-0">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                        {member.image ? (
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-12 h-12 sm:w-14 sm:h-14 text-gray-400"
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
                <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-1">{member.name}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">{member.title}</p>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{member.bio}</p>

                    {/* Social icons */}
                    <div className="flex justify-center sm:justify-start items-center gap-4">
                        <a href="#" className="text-black hover:text-gray-600 transition-colors" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                        <a href="#" className="text-black hover:text-gray-600 transition-colors" aria-label="Twitter">
                            <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                        <a href="#" className="text-black hover:text-gray-600 transition-colors" aria-label="Dribbble">
                            <Dribbble className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
