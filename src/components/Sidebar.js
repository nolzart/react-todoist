import React from 'react'

const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <ul className='sidebar__generic u-mb-medium'>
                <li className='sidebar__generic--item'>
                    <span className='u-color-blue'>
                        <ion-icon
                            name='file-tray'
                            class='sidebar__generic--icon'
                        ></ion-icon>
                    </span>
                    <span>Inbox</span>
                </li>
                <li className='sidebar__generic--item'>
                    <span className='u-color-green'>
                        <ion-icon
                            name='today-outline'
                            class='sidebar__generic--icon'
                        ></ion-icon>
                    </span>
                    <span>Today</span>
                </li>
                <li className='sidebar__generic--item'>
                    <span className='u-color-purple'>
                        <ion-icon
                            name='calendar-outline'
                            class='sidebar__generic--icon'
                        ></ion-icon>
                    </span>
                    <span>Upcoming</span>
                </li>
            </ul>
            <div className='sidebar__middle'>
                <button className='sidebar__projects'>
                    <div>
                        <ion-icon
                            name='chevron-forward-outline'
                            class='sidebar__middle--icon'
                        ></ion-icon>
                        Projects
                    </div>
                    <span><ion-icon name="add-outline"></ion-icon></span>
                </button>
                <button className='sidebar__projects'>
                    <div>
                        <ion-icon
                            name='chevron-forward-outline'
                            class='expansion-panel__icon'
                        ></ion-icon>
                        Filters
                    </div>
                    <span>+</span>
                </button>
            </div>
        </aside>
    )
}

export default Sidebar
