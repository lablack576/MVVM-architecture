import { atom } from "recoil";

export const auth = atom({
    key: "auth",
    default: {
        user: null,
        isAuth: false,
    },
});
