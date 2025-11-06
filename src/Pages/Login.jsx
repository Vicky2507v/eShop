import { NavLink } from "react-router-dom"

export const Login = () => {
    return (
        <>
            <div className="auth-page">
                <form className="auth-form">
                    <fieldset>
                        <h3>Login here</h3>

                        <label htmlFor="email">
                            Email:
                        </label>
                        <input type="email" name="email" id="email" placeholder="Enter Email" required autoComplete="off" /><br />
                        
                        <label htmlFor="password">
                            Password:
                        </label>
                        <input type="password" name="password" id="password" placeholder="Enter password" required autoComplete="off" /><br />
                        
                        <NavLink>Forgot Password?</NavLink> <br />
                        <button type="submit">Login</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}