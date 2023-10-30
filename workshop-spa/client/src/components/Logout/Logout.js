import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const Logout = () => {

    const { logoutUser, user } = useContext(AuthContext);

    logoutUser(user.accessToken);

    return null;

}

export default Logout;