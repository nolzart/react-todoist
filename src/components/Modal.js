import React from 'react'

const Modal = props => {
    const {
        activeModal,
        modalTitle,
        buttonTitle,
        setActiveModal,
        modalConductor,
        handleSubmit,
    } = props
    const handleClick = () => {
        handleSubmit()
        setActiveModal('')
    }
    return (
        <section
            className={`modal ${activeModal !== modalConductor && 'u-display-none'}`}
        >
            <div className='modal__container'>
                <header className='modal__header'>
                    <h3 className='modal__header--title'>{modalTitle}</h3>
                </header>

                {props.children && (
                    <>
                        <div className='separator'></div>
                        <div className='modal__body'>{props.children}</div>
                        <div className='separator'></div>
                    </>
                )}

                <footer className='modal__footer'>
                    <button className='modal__btn--cancel' onClick={() => setActiveModal('')}>
                        Cancel
                    </button>
                    <button className='modal__btn' onClick={handleClick}>
                        {buttonTitle}
                    </button>
                </footer>
            </div>
        </section>
    )
}

export default Modal
