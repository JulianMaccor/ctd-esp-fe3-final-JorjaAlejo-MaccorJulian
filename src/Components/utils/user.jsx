import { useMemo, useReducer } from "react";

const initialUser = JSON.parse(localStorage.getItem("user")) ?? {likes: [], theme: "light"}

export const userActions = {
    ADD_LIKE: "ADD_LIKE",
    REMOVE_LIKE: "REMOVE_LIKE",
    CHANGE_THEME: "SET_THEME",
}

const addLike = (state, payload) => {
    const newState = state.likes.some(like => like.id === payload.id) 
    ? state 
    : {...state, likes:  [...state.likes, payload]}

    localStorage.setItem("user", JSON.stringify(newState))
    return newState
}

const removeLike = (state, payload) => {
    const newState = {...state, likes: state.likes.filter((item) => item.id !== payload.id)}
    localStorage.setItem("user", JSON.stringify(newState))
    return newState
}

const changeTheme = (state) => {
    const newState = {...state, theme: state.theme === "light" ? "dark" : "light"}

    localStorage.setItem("user", JSON.stringify(newState))
    return newState
}

const useUserReducer = () => {
    const [user, dispatch] =useReducer((state, {type, payload}) => {
        switch (type) {
        case userActions.ADD_LIKE:
            return addLike(state, payload);
        case userActions.REMOVE_LIKE:
            return removeLike(state, payload);
        case userActions.CHANGE_THEME:
            return changeTheme(state);
        default:
            return state;
        }
    }, initialUser)

    const memorizedUser = useMemo(() => user, [user]);

    return [memorizedUser, dispatch]
};


export default useUserReducer