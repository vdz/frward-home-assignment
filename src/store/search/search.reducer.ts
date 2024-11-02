import { createReducer } from "@reduxjs/toolkit";
import { SearchState } from "./types";
import { clearTerm, setSearchResults, setTerm } from "./search.actions";

export const defaultState: SearchState = {
    term: "",
    results: [],
};

export const searchReducer = createReducer(defaultState, (builder) => {
    builder.addCase(setTerm, (state, action) => {
        state.term = action.payload.term;
    })
    .addCase(clearTerm, (state, action) => {
        state.term = "";
        state.results = [];
    })
    .addCase(setSearchResults, (state, action) => {
        state.results = action.payload.results;
    });
});
