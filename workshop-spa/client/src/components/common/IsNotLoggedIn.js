import { useContext } from "react"
import AuthContext from "../../contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom";

const IsGuest = () => {
    const { user } = useContext(AuthContext);

    if (!user.email) {
        return <Navigate to='/login' replace />
    }

    return <Outlet />
}

export default IsGuest;