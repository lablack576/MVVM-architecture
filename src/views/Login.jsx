import HandleLogin from "../view_model/HandleLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {
        handleSubmit,
        username,
        setUsername,
        password,
        setPassword,
        error,
    } = HandleLogin();
    const navigate = useNavigate();

    return (
        <div className="container">
            <h2>Login Page</h2>
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
                    <label htmlFor="password">Password</label>
                    <input
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && (
                    <p className="redflag">Username or password incorrect !</p>
                )}
                <button className="a1 button-full" type="submit">
                    Login
                </button>
                <p className="msg">
                    No account ?
                    <span onClick={() => navigate("/register")}>
                        {" "}
                        Create one
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Login;
