import React from 'react'
import moment from 'moment'
const Task = ({task, date, id, projectName}) => {
    return (
        <section className='task__body'>
            <div className='task__body--options'>
                <label
                    className='task__body--title'
                    htmlFor={`task-${id}`}
                >
                    <input
                        type='checkbox'
                        id={`task-${id}`}
                        name='task-complete'
                        className='form__checkbox'
                    />
                    <span className='task__checkbox--checked'></span>
                    {task}
                </label>
                <p className='task__body--date'>{moment(date.toDate()).format('MMM DD')}</p>
            </div>
            <div className='task__body--options'>
                <div className='task__body--icon-container'>
                    <ion-icon
                        class='task__body--icon-item'
                        name='pencil-outline'
                    ></ion-icon>
                    <ion-icon
                        class='task__body--icon-item'
                        name='trash-outline'
                    ></ion-icon>
                </div>
                <p className='task__body--project'>{projectName}</p>
            </div>
        </section>
    )
}

export default Task
