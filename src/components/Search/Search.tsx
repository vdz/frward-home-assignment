import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTerm } from "../../store/search/search.actions";
import { SearchInput } from "./Search.styled";
import { RootState } from "../../store/store";

export const Search: React.FC = () => {
    const dispatch = useDispatch();
    const term = useSelector((state: RootState) => state.search.term);
    
    return (
        <SearchInput 
            type="search"
            value={term}
            placeholder="Search users"
            onChange={(e) => dispatch(setTerm({ term: e.target.value }))}
        />
    );
}
