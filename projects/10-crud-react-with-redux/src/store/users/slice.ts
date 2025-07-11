// js
// react
// third
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// own

const DEFAULT_STATE = [
    {
        id: '1',
        name: 'John Doe',
        email: 'John-Doe@gmail.com',
        github: '@John-Doe'
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'Jane-Smith@gmail.com',
        github: '@Jane-Smith'
    },
    {
        id: '3',
        name: 'Jane Smith',
        email: 'live',
        github: '$5,720.00'
    },
    {
        id: '4',
        name: 'Mike Johnson',
        email: 'Mike-Johnson@gmail.com',
        github: '@Mike-Johnson'
    },
    {
        id: '5',
        name: 'Alice Brown',
        email: 'Alice-Brown@gmail.com',
        github: '@Alice-Brown'
    },
    {
        id: '6',
        name: 'David Clark',
        email: 'David-Clark@gmail.com',
        github: '@David-Clark'
    },
    {
        id: '7',
        name: 'Sarah Wilson',
        email: 'Sarah-Wilson@gmail.com',
        github: '@Sarah-Wilson'
    },
    {
        id: '8',
        name: 'Michael Adams',
        email: 'Michael-Adams@gmail.com',
        github: '@Michael-Adams'
    },
    {
        id: '9',
        name: 'Laura White',
        email: 'Laura-White@gmail.com',
        github: '@Laura-White'
    },
    {
        id: '10',
        name: 'Pepe Perez',
        email: 'Pepe-Perez@gmail.com',
        github: '@Pepe-Perez'
    },
];

export type UserId = string;

export interface IUser {
    name: string;
    email: string;
    github: string;
}

export interface IUserWithId extends IUser {
    id: UserId;
}

const initialState: IUserWithId[] = (() => {
    const persitedState = localStorage.getItem('__redux__state__');
    return persitedState ? JSON.parse(persitedState).users : DEFAULT_STATE;
})();

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addNewUser: (state, action: PayloadAction<IUser>) => {
            const id = crypto.randomUUID();
            return [
                ...state,
                {
                    id,
                    ...action.payload
                }
            ];
        },
        deleteUserById: (state, action: PayloadAction<UserId>) => {
            const id = action.payload;
            return state.filter(user => user.id !== id);
        },
        rollbackUser: (state, action: PayloadAction<IUserWithId>) => {
            const isUserAlreadyDefined = state.some(user => user.id === action.payload.id);
            if (!isUserAlreadyDefined) {
                return [
                    ...state,
                    action.payload
                ];
            }
        }
    }
})

// exports.
export default usersSlice.reducer;
export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions;