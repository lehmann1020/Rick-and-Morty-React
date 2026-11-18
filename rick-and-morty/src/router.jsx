import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NotFoundPage from "./pages/NotFound.jsx"
import CharactersPage from "./pages/CharactersPage.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"
import { createBrowserRouter } from 'react-router'
import CharacterDetailsPage from './pages/CharacterDetailsPage.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                index: true, 
                element: <HomePage />
            },
            {
                path: "about", 
                element: <AboutPage />
            },
            {
                path: "characters",
                element: <CharactersPage/>
            },
            {
                path: "characters/:id",
                element: <CharacterDetailsPage />
            },
            {
                path: "*",
                element: <NotFoundPage />
            }
        ],
        errorElement: <ErrorPage />
    }
])

export default router;