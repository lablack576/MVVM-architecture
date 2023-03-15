import { useState } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { auth } from "../view_model/atoms/auth";

const HandleRegister = (e) => {
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [password, setPassword] = useState("");
    const setAuth = useSetRecoilState(auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:4000/register", {
                username: username,
                fullname: fullname,
                password: password,
            })
            .then((response) => {
                if (response.data) {
                    setAuth(() => ({
                        isAuth: true,
                        user: username,
                    }));
                }
            });

        setUsername("");
        setFullname("");
        setPassword("");
    };
    return {
        handleSubmit,
        username,
        setUsername,
        password,
        setPassword,
        fullname,
        setFullname,
    };
};

export default HandleRegister;
