import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    exact
                    element={<PrivateRoute Component={Home} />}
                />
                <Route
                    path="/login"
                    element={<PublicRoute Component={Login} />}
                />
                <Route
                    path="/register"
                    element={<PublicRoute Component={Register} />}
                />
                <Route path="*" exact element={<p>404 - Not found</p>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
