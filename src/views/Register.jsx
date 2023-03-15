import HandleRegister from "../view_model/HandleRegister";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const {
        handleSubmit,
        username,
        setUsername,
        password,
        setPassword,
        fullname,
        setFullname,
    } = HandleRegister();
    const navigate = useNavigate();

    return (
        <div className="container">
            <h2>Registration Page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        placeholder="Username"
                        name="username"
                        type="text"
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="fullname">Fullname</label>
                    <input
                        placeholder="Fullname"
                        name="fullname"
                        type="text"
                        value={fullname}
                        required
                        onChange={(e) => setFullname(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="a1 button-full" type="submit">
                    Register
                </button>
                <p className="msg">
                    Already have an account ?
                    <span onClick={() => navigate("/login")}> Log in</span>
                </p>
            </form>
        </div>
    );
};

export default Register;
