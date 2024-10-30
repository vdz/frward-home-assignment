import { createAction } from "@reduxjs/toolkit";
import { DeleteUserPayload, NewUserPayload, SetUserErrorPayload, SetUsersPayload, UpdateUserPayload, UserDataValidPayload, ValidateUserDataPayload } from "./types";

export const setUsers = createAction<SetUsersPayload>('user/setUsers');
export const newUser = createAction<NewUserPayload>('user/newUser');
export const validateUserData = createAction<ValidateUserDataPayload>('user/validateUserData');
export const userNameValid = createAction<UserDataValidPayload>('user/userNameValid');
export const userCountryValid = createAction<UserDataValidPayload>('user/userCountryValid');
export const userEmailValid = createAction<UserDataValidPayload>('user/userEmailValid');
export const userPhoneValid = createAction<UserDataValidPayload>('user/userPhoneValid');
export const updateUser = createAction<UpdateUserPayload>('user/updateUser');
export const deleteUser = createAction<DeleteUserPayload>('user/deleteUser');
export const setUserError = createAction<SetUserErrorPayload>('user/setUserError');
