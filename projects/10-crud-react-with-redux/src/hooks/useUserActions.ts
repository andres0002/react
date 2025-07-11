// js
// react
// third
// own
import { useAddDispatch } from "./useStore";
import { addNewUser, deleteUserById, type IUser, type UserId } from "../store/users/slice";

export function useUserActions() {
    const dispatch = useAddDispatch();

    const handleNewUser = (user: IUser) => {
        dispatch(addNewUser(user));
    }

    const handleRemoveUser = (id: UserId) => {
        dispatch(deleteUserById(id))
    }

    return { handleNewUser, handleRemoveUser };
}