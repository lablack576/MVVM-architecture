import { useSetRecoilState } from "recoil";
import { auth } from "../view_model/atoms/auth";

const Logout = (e) => {
    const setAuth = useSetRecoilState(auth);

    const LogoutFunction = (e) => {
        console.log("Logout");
        setAuth(() => ({
            isAuth: false,
            user: null,
        }));
    };
    return {
        LogoutFunction,
    };
};

export default Logout;
