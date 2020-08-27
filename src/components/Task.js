import React from 'react'

const Task = () => {
    return (
        <section className='task__body'>
            <div className='task__body--options'>
                <label
                    className='task__body--title'
                    htmlFor='task-complete'
                >
                    <input
                        type='checkbox'
                        id='task-complete'
                        name='task-complete'
                        className='form__checkbox'
                    />
                    <span className='task__checkbox--checked'></span>
                    Task title
                </label>
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
                <p className='task__body--project'>Project Name</p>
            </div>
        </section>
    )
}

export default Task
