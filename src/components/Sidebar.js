import React from 'react'

import Projects from './Projects'
const Sidebar = () => {
    const genericsData = [
        { name: 'Inbox', icon: 'file-tray', color: 'u-color-blue' },
        { name: 'Today', icon: 'today-outline', color: 'u-color-green' },
        { name: 'Upcoming', icon: 'calendar-outline', color: 'u-color-purple' },
    ]
    return (
        <aside className='sidebar'>
            <ul className='sidebar__generic u-mb-medium'>
                {genericsData.map(generic => (
                    <li className='sidebar__generic--item' key={generic.name}>
                        <span className={generic.color}>
                            <ion-icon
                                name={generic.icon}
                                class='sidebar__generic--icon'
                            ></ion-icon>
                        </span>
                        <span>{generic.name}</span>
                    </li>
                ))}
            </ul>
            <div className='sidebar__middle'>
                <Projects sectionName='Projects' />
                <Projects sectionName='Filters' />
            </div>
        </aside>
    )
}

export default Sidebar
