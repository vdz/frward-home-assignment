import { createReducer } from "@reduxjs/toolkit";
import { UiState } from "./types";
import { hideNewUserForm, showNewUserForm } from "./ui.actions";

export const defaultState: UiState = {
    showNewUserForm: false,
};

export const uiReducer = createReducer(defaultState, (builder) => {
    builder.addCase(showNewUserForm, (state, action) => {
        state.showNewUserForm = true;
    })
    .addCase(hideNewUserForm, (state, action) => {
        state.showNewUserForm = false;
    });
});