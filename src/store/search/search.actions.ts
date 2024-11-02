import { createAction } from "@reduxjs/toolkit";
import { SetSearchResultsPayload, SetTermPayload } from "./types";

export const setTerm = createAction<SetTermPayload>("search/setTerm");
export const clearTerm = createAction("search/clearTerm");
export const setSearchResults = createAction<SetSearchResultsPayload>("search/setSearchResults");
