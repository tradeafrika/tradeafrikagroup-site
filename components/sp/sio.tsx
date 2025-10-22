'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Event {
    date: string // YYYY-MM-DD
    title: string
}

const sampleEvents: Event[] = [
    { date: '2025-10-22', title: 'Meeting with client' },
    { date: '2025-10-25', title: 'Project deadline' },
    { date: '2025-10-28', title: 'Team lunch' },
]

const CalendarSection: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)

    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
    const daysInMonth = endOfMonth.getDate()

    const startDay = startOfMonth.getDay() // 0 = Sunday
    const weeks: number[][] = []
    let day = 1 - startDay

    while (day <= daysInMonth) {
        const week: number[] = []
        for (let i = 0; i < 7; i++, day++) {
            week.push(day > 0 && day <= daysInMonth ? day : 0)
        }
        weeks.push(week)
    }

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    }

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    }

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    const formatDate = (d: number) =>
        `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(d).padStart(
            2,
            '0'
        )}`

    const eventsForSelectedDate = selectedDate
        ? sampleEvents.filter((event) => event.date === formatDate(selectedDate.getDate()))
        : []

    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Schedule</h2>
                <p className="text-gray-600">View your appointments and availability</p>
            </div>

            <div className="max-w-md mx-auto bg-white rounded-xl shadow p-6 relative">
                {/* Month Navigation */}
                <div className="flex items-center justify-between mb-4">
                    <button onClick={prevMonth} className="p-2 rounded-full hover:bg-gray-100">
                        <ChevronLeft size={20} />
                    </button>
                    <h3 className="font-semibold text-lg">
                        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h3>
                    <button onClick={nextMonth} className="p-2 rounded-full hover:bg-gray-100">
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Weekday Labels */}
                <div className="grid grid-cols-7 text-sm font-medium text-gray-500 mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                        <div key={day} className="text-center">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Days */}
                <div className="grid grid-cols-7 gap-1 mb-4">
                    {weeks.flat().map((d, idx) => {
                        if (d === 0) return <div key={idx} className="h-10"></div>
                        const dateStr = formatDate(d)
                        const isToday =
                            d === new Date().getDate() &&
                            currentDate.getMonth() === new Date().getMonth() &&
                            currentDate.getFullYear() === new Date().getFullYear()
                        const isSelected = selectedDate && d === selectedDate.getDate()

                        return (
                            <button
                                key={idx}
                                onClick={() =>
                                    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), d))
                                }
                                className={`h-10 flex items-center justify-center rounded cursor-pointer transition
                  ${isToday ? 'bg-emerald-200 font-bold' : ''}
                  ${isSelected ? 'bg-emerald-600 text-white font-semibold' : 'hover:bg-emerald-100'}
                `}
                            >
                                {d}
                            </button>
                        )
                    })}
                </div>

                {/* Events */}
                {selectedDate && (
                    <div className="mt-4 text-left">
                        <h4 className="font-semibold mb-2">Events on {selectedDate.toDateString()}:</h4>
                        {eventsForSelectedDate.length > 0 ? (
                            <ul className="list-disc list-inside text-gray-700">
                                {eventsForSelectedDate.map((event, idx) => (
                                    <li key={idx}>{event.title}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500">No events for this day.</p>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}

export default CalendarSection
