// js
// react
// third
import { configureStore, type Middleware } from "@reduxjs/toolkit";
import { toast } from "sonner";
// own
import usersRedeucer, { rollbackUser } from "./users/slice";

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
    // antes de cualquier action.
    // console.log(store.getState());
    // console.log(action);
    next(action);
    // despues de cualquier action.
    // console.log(store.getState());
    localStorage.setItem('__redux__state__', JSON.stringify(store.getState()));
}

const syncWithDataBaseMiddleware: Middleware = store => next => action => {
    const {type, payload} = action;
    const previousState = store.getState();
    console.log({action, state: store.getState()});
    next(action);
    if (type === 'users/deleteUserById') { // elimination user.
        const userIdToRemove = payload;
        const userToRemove = previousState.users.find(user => user.id === userIdToRemove);
        fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
            method: 'DELETE'
        })
        .then(res => {
            if (res.ok) {
                return toast.success(`User ${userIdToRemove} eliminado correctamente...`);
            }
            throw new Error("Error al eliminar el user...");
            
        })
        .catch(error => {
            if (userToRemove) {
                store.dispatch(rollbackUser(userToRemove));
            }
            console.log('error...', error);
            toast.error(`Error  deleting User ${userIdToRemove}...`);
        })
    }
}

export const store = configureStore({
    reducer: {
        users: usersRedeucer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(
                persistanceLocalStorageMiddleware,
                syncWithDataBaseMiddleware
            );
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;