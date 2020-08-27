//components
import Header from '../layout/Header'
import Sidebar from '../Sidebar'
import Tasks from '../Tasks'

const AppPage = () => {
    return (
        <>
            <Header />
            <div className="grid">
                <Sidebar />
                <Tasks />
            </div>
        </>
    )
}

export default AppPage
