import { useState } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { auth } from "./atoms/auth";

const HandleLogin = (e) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const setAuth = useSetRecoilState(auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:4000/login", {
                username: username,
                password: password,
            })
            .then((response) => {
                if (response.data.rowCount !== 0) {
                    setAuth(() => ({
                        isAuth: true,
                        user: username,
                    }));
                } else {
                    setError(true);
                }
            });

        setUsername("");
        setPassword("");
    };
    return {
        handleSubmit,
        username,
        setUsername,
        password,
        setPassword,
        error,
    };
};

export default HandleLogin;
