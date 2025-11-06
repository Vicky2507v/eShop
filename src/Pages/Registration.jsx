import { NavLink } from "react-router-dom"

export const Registration = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="auth-page">
                <form className="auth-form" onSubmit={handleFormSubmit}>
                    <fieldset>
                        <h3>Create Your Account</h3>
                        <label htmlFor="name">
                            Name:
                        </label> 
                        <input type="text" name="name" id="name" required placeholder="Enter name" autoComplete="off" /><br />
                        
                        <label htmlFor="email">
                            Email:
                        </label> 
                        <input type="email" name="email" id="email" required placeholder="Enter email" autoComplete="off" /><br />
                        
                         <label htmlFor="password">
                            Password:
                        </label> 
                        <input type="password" name="password" id="password" required placeholder="Enter password" autoComplete="off" /><br />

                        <label htmlFor="number">
                            Phone No:
                        </label> 
                        <input type="number" name="number" id="number" required placeholder="Enter number" autoComplete="off" /><br />
                        
                       
                        <button type="submit">Register</button><br />
                        
                        <p>already have an account? <NavLink to="login">Login</NavLink></p>
                    </fieldset>
                </form>
            </div>
        </>
    )
}