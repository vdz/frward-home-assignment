import { User } from "../user/types";

export interface SearchState {
    term: string;
    results: User[];
}

export interface SetTermPayload {
    term: string;
}

export interface SetSearchResultsPayload {
    results: User[];
}