import Logout from "../view_model/Logout";
import { useRecoilValue } from "recoil";
import { auth } from "../view_model/atoms/auth";

const Home = () => {
    const { LogoutFunction } = Logout();
    const { user } = useRecoilValue(auth);

    return (
        <div className="container dashboard">
            <h1>
                Welcome to the main page <span>{user}</span>
            </h1>
            <button className="a1" onClick={() => LogoutFunction()}>
                Log out
            </button>
        </div>
    );
};

export default Home;
