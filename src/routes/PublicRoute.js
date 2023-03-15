import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { auth } from "../view_model/atoms/auth";

const PublicRoute = ({ Component }) => {
    const { isAuth } = useRecoilValue(auth);
    return isAuth ? <Navigate to="/" /> : <Component />;
};

export default PublicRoute;
