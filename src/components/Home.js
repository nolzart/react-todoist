import React from 'react'

//Components
import Header from './layout/Header'

const Home = () => (
    <>
        <Header />
        <main className='main'>
            <img src="img/banner.jpg" alt="banner productivity"/>
            <div className="main__title">
                <span>Organize it all </span><span>with Todoist</span>
                <button className="btn btn--red btn--radius">Get Started</button>
            </div>
        </main>
    </>
)

export default Home
