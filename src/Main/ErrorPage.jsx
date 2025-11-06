import { NavLink, useNavigate } from "react-router-dom"

export const ErrorPage = () => {
    
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <>
            <h1>404 error</h1>
            <NavLink to="/">Go to Home page</NavLink>
            <button className="goBack-btn" onClick={handleGoBack} >Go Back</button>
        </>

    )
}