import { useState, useEffect } from 'react'
import moment from 'moment'

const useCalendar = () => {
    const today = new Date()
    const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
    const nextWeek = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + (8 - today.getDay())
    )
    const [days, setDays] = useState([])
    const [dateContext, setDateContext] = useState(moment())
    const nextMonth = () => {
        let newDateContext = Object.assign({}, dateContext)
        newDateContext = moment(newDateContext).add(1, 'month')
        setDateContext(newDateContext)
    }
    const prevMonth = () => {
        let newDateContext = Object.assign({}, dateContext)
        newDateContext = moment(newDateContext).subtract(1, 'month')
        setDateContext(newDateContext)
    }

    const actualMonth = () => {
        let newDateContext = Object.assign({}, dateContext)
        newDateContext = moment(new Date())
        setDateContext(newDateContext)
    }
    const selectDay = day => {
        let newDateContext = Object.assign({}, dateContext)
        newDateContext = moment(newDateContext).date(day)
        console.log('function selct day')
        setDateContext(newDateContext)
    }

    const prevLastDay = () => {
        let newDateContext = Object.assign({}, dateContext)
        newDateContext = moment(newDateContext)
        newDateContext.subtract(1, 'month')
        return newDateContext.daysInMonth()
    }

    const firstDayIndex = () => {
        let newDateContext = Object.assign({}, dateContext)
        newDateContext = moment(newDateContext)
        newDateContext.startOf('month')
        return newDateContext.day()
    }
    const lastDayIndex = () => {
        let newDateContext = Object.assign({}, dateContext)
        newDateContext = moment(newDateContext)
        newDateContext.add(1, 'month')
        newDateContext.startOf('month')
        return newDateContext.day()
    }

    useEffect(() => {
        let newDays = []
        const nextDays = 7 - lastDayIndex()
        for (let x = firstDayIndex(); x > 0; x--)
            newDays.push({ type: 'prev-month', date: prevLastDay() - x + 1 })

        for (let i = 1; i <= dateContext.daysInMonth(); i++)
            newDays.push({ type: 'actual-month', date: i })
        for (let j = 1; j <= nextDays; j++) {
            newDays.push({ type: 'next-month', date: j })
        }
        setDays(newDays)
    }, [dateContext])
    return [
        dateContext,
        days,
        today,
        tomorrow,
        nextWeek,
        prevMonth,
        nextMonth,
        actualMonth,
        selectDay,
    ]
}

export default useCalendar
