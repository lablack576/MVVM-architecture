const { response } = require("express");
const { Pool } = require("pg");

const pool = new Pool({
    user: "",
    host: "",
    database: "",
    password: "",
    port: "",
});

const login = async (request, response) => {
    const { username, password } = request.body;

    await pool.query(
        "SELECT * FROM public.utilisateurs WHERE username=$1 AND password=$2",
        [username, password],
        (error, results) => {
            if (error) {
                response.send(false);

                throw error;
            }
            response.send(results);
        }
    );
};
const register = async (request, response) => {
    const { username, password, fullname } = request.body;
    await pool.query(
        "INSERT INTO public.utilisateurs (username, password, fullname) VALUES ($1, $2, $3)",
        [username, password, fullname],
        (error, results) => {
            if (error) {
                response.send(false);

                throw error;
            }
            response.send(true);
        }
    );
};

module.exports = { pool, register, login };
