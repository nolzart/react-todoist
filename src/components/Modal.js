import React from 'react'

const Modal = props => {
    const {
        activeModal,
        modalTitle,
        buttonTitle,
        setActiveModal,
        modalConductor,
        handleSubmit,
        showBody,
    } = props
    console.log(props)
    return (
        <section className={`modal ${activeModal !== modalConductor && 'u-display-none'}`}>
            <div className='modal__container'>
                <header className='modal__header'>
                    <h3 className='modal__header--title'>{modalTitle}</h3>
                </header>
                <div className={`modal__body ${!showBody && 'u-display-none'}`}>
                    {props.children}
                </div>
                <footer className='modal__footer'>
                    <button className='modal__btn--cancel' onClick={() => setActiveModal('')}>
                        Cancel
                    </button>
                    <button className='modal__btn' onClick={handleSubmit}>
                        {buttonTitle}
                    </button>
                </footer>
            </div>
        </section>
    )
}

export default Modal
