import { atom } from "recoil"

export const modelState = atom({
    key: "modelState",
    default: false,
});

export const PostIdState = atom({
    key: "PostIdState",
    default: "",
});