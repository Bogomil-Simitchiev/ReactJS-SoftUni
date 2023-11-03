import { Link } from "react-router-dom";
import { withAuth } from "../../contexts/AuthContext";

const Login = ({ auth }) => {
    const loginHandler = (e) => {
        e.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(e.target));
        auth.loginUser(email, password);

    }
    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={loginHandler}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" defaultValue="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click <Link to="/register">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}

export default withAuth(Login);