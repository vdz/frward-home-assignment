import { createAction } from "@reduxjs/toolkit";
import { DeleteUserPayload, NewUserPayload, SetUserErrorPayload, SetUsersPayload, UpdateUserPayload } from "./types";

export const setUsers = createAction<SetUsersPayload>('user/setUsers');
export const newUser = createAction<NewUserPayload>('user/newUser');
export const updateUser = createAction<UpdateUserPayload>('user/updateUser');
export const deleteUser = createAction<DeleteUserPayload>('user/deleteUser');
export const setUserError = createAction<SetUserErrorPayload>('user/setUserError');
