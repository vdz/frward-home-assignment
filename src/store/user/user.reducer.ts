import { createReducer } from "@reduxjs/toolkit";
import { UserState } from "./types";
import { deleteUser, newUser, setUserError, setUsers, updateUser, userCountryValid, userDataValid, userEmailValid, userNameValid, userPhoneValid } from "./user.actions";

export const defaultState: UserState = {
    users: [],
    by_id: {},
    errors: {}
}

export const userReducer = createReducer(defaultState, (builder) => {
    builder.addCase(setUsers, (state, action) => {
        state.users = action.payload.users;
        action.payload.users.forEach((user) => {
            state.by_id[user.id] = user;
        });
        state.errors = defaultState.errors;
    })
    .addCase(newUser, (state, action) => {
        state.users.splice(0, 0, action.payload);
        state.by_id[action.payload.id] = action.payload;
    })
    .addCase(updateUser, (state, action) => {
        state.by_id[action.payload.id] = {
            ...state.by_id[action.payload.id],
            ...action.payload
        }
        state.users = state.users.map((user) => {
            return user.id === action.payload.id ? {
                ...user,
                ...action.payload
            } : user;
        });
        // delete possible errors for the user
        delete state.errors[action.payload.id];
    })
    .addCase(deleteUser, (state, action) => {
        delete state.by_id[action.payload.id];
        state.users = state.users.filter((user) => user.id !== action.payload.id);
        // delete possible errors
        delete state.errors[action.payload.id];
    })
    .addCase(setUserError, (state, action) => {
        if (state.errors[action.payload.id] === undefined) {
            state.errors[action.payload.id] = {};
        }

        state.errors[action.payload.id] = {
            ...state.errors[action.payload.id],
            ...action.payload.error
        }
    })
    .addCase(userNameValid, (state, action) => {
        if (state.errors[action.payload.id] === undefined) return;
        delete state.errors[action.payload.id].name;
    })
    .addCase(userCountryValid, (state, action) => {
        if (state.errors[action.payload.id] === undefined) return;
        delete state.errors[action.payload.id].country;
    })
    .addCase(userEmailValid, (state, action) => {
        if (state.errors[action.payload.id] === undefined) return;
        delete state.errors[action.payload.id].email;
    })
    .addCase(userPhoneValid, (state, action) => {
        if (state.errors[action.payload.id] === undefined) return;
        delete state.errors[action.payload.id].phone;
    });
});

