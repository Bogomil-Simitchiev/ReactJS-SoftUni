import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { login, logout } from "../services/authService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useLocalStorage('user', {});

    const navigate = useNavigate();


    const loginUser = (email, password) => {
        login(email, password).then(result => {
            setUser(result);
            navigate('/');
        }).catch(err => console.log(err))
    }

    const logoutUser = (accessToken) => {
        logout(accessToken).then(result => {
            setUser({});
            navigate('/');
        }).catch(err => console.log(err))
    }


    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const withAuth = (Component) => {
    const AuthWrapperComponent = (props) => {

        const context = useContext(AuthContext);
        return <Component {...props} auth={context} />
    }

    return AuthWrapperComponent;
}