import React, {useEffect} from 'react'
import moment from 'moment'
import useCalendar from '../../hooks/useCalendar'
const Calendar = ({currentDate, setCurrentDate, showOption}) => {
    const [
        dateContext,
        days,
        today,
        tomorrow,
        nextWeek,
        prevMonth,
        nextMonth,
        actualMonth,
        selectDay,
    ] = useCalendar(currentDate)
    useEffect(() => {
        setCurrentDate(moment(dateContext))
    }, [dateContext])
    return (
        <div className={`calendar ${showOption === 'calendar' ?  '' : 'u-display-none'}`}>
            <div className='calendar__date'>
                <p>Sep 04</p>
            </div>
            <div className='separator'></div>
            <div className='calendar__scheduled'>
                <button className='calendar__btn' id='today'>
                    <div className='calendar__btn--left'>
                        <ion-icon
                            name='today-outline'
                            style={{ color: '#058527' }}
                            class='calendar__btn--icons'
                        ></ion-icon>
                        Today
                    </div>
                    <div id='calendar-today'>{moment(today).format('ddd')}</div>
                </button>
                <button className='calendar__btn' id='tomorrow'>
                    <div className='calendar__btn--left'>
                        <ion-icon
                            name='sunny-outline'
                            style={{ color: '#ad6200' }}
                            class='calendar__btn--icons'
                        ></ion-icon>
                        Tomorrow
                    </div>
                    <div id='calendar-day'>{moment(tomorrow).format('ddd')}</div>
                </button>
                <button className='calendar__btn' id='next-week'>
                    <div className='calendar__btn--left'>
                        <ion-icon
                            name='arrow-forward-outline'
                            style={{ color: '#692fc2' }}
                            class='calendar__btn--icons'
                        ></ion-icon>
                        Next Week
                    </div>
                    <div id='calendar-next-week'>{moment(nextWeek).format('ddd')}</div>
                </button>
                <button className='calendar__btn' id='no-date'>
                    <div className='calendar__btn--left'>
                        <ion-icon
                            name='remove-circle-outline'
                            class='calendar__btn--icons'
                            style={{ color: 'gray' }}
                        ></ion-icon>
                        No Date
                    </div>
                    <div></div>
                </button>
            </div>
            <div className='separator'></div>
            <div className='calendar__container'>
                <header className='calendar__month'>
                    <div className='calendar__month--date'>
                        <p className='calendar__month--date'>{dateContext.format('MMM YYYY')}</p>
                    </div>
                    <div className='calendar__month--buttons'>
                        <ion-icon
                            name='chevron-back-outline'
                            class='calendar__month--icon'
                            onClick={() => prevMonth()}
                        ></ion-icon>
                        <ion-icon
                            name='ellipse-outline'
                            class='calendar__month--icon'
                            onClick={() => actualMonth()}
                        ></ion-icon>
                        <ion-icon
                            name='chevron-forward-outline'
                            class='calendar__month--icon'
                            onClick={() => nextMonth()}
                        ></ion-icon>
                    </div>
                </header>
                <section className='calendar__weekdays'>
                    <div className='calendar__weekdays--day'>S</div>
                    <div className='calendar__weekdays--day'>M</div>
                    <div className='calendar__weekdays--day'>T</div>
                    <div className='calendar__weekdays--day'>W</div>
                    <div className='calendar__weekdays--day'>T</div>
                    <div className='calendar__weekdays--day'>F</div>
                    <div className='calendar__weekdays--day'>S</div>
                </section>
                <footer className='calendar__days'>
                    {days.map(day => {
                        if (day.type === 'prev-month') {
                            return (
                                <div
                                    className='calendar__days--prev-date'
                                    key={`prev-${day.date}`}
                                    onClick={e => selectDay(e.target.textContent)}
                                >
                                    {day.date}
                                </div>
                            )
                        }
                        if (day.type === 'actual-month') {
                            if (
                                day.date === new Date().getDate() &&
                                dateContext.month() === new Date().getMonth() &&
                                dateContext.year() === new Date().getFullYear()
                            ) {
                                return (
                                    <div
                                        className='calendar__days--today'
                                        key={`actual-${day.date}`}
                                        onClick={e => selectDay(e.target.textContent)}
                                    >
                                        {day.date}
                                    </div>
                                )
                            }

                            return (
                                <div
                                    key={`actual-${day.date}`}
                                    onClick={e => selectDay(e.target.textContent)}
                                >
                                    {day.date}
                                </div>
                            )
                        }
                        if (day.type === 'next-month')
                            return (
                                <div
                                    className='calendar__days--next-date'
                                    key={`next-${day.date}`}
                                    onClick={e => selectDay(e.target.textContent)}
                                >
                                    {day.date}
                                </div>
                            )
                    })}
                </footer>
            </div>
            <div className='separator'></div>
            <button className='projects__inner--btn u-margin-center u-no-padding'>
                + Add time
            </button>
        </div>
    )
}

export default Calendar
