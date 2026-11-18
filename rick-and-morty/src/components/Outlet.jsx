import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"

const Outlet = ({children}) => {
        if(window.location.pathname === '/'){
            return <HomePage/>
        } 
        else if(window.location.pathname === '/about'){
            return <AboutPage/>
        }else{
            null
        }
}