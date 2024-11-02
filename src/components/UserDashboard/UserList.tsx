import React from "react";
import { RootState } from "../../store/store";
import { User } from "./User";
import { useSelector } from "react-redux";
import { UsersWrapper } from "./UserDashboard.styled";

export const Users: React.FC = () => {
    const users = useSelector((state: RootState) => state.user.users);
    const filter = useSelector((state: RootState) => state.search.term);
    const searchResults = useSelector((state: RootState) => state.search.results);

    return (
        <UsersWrapper>
            {getUserList()}
        </UsersWrapper>
    );

    function getUserList() {
        let results = users;
        if (!users.length) return null;
        // if search term in not nothing, use search  instead of all users
        if (filter.length > 0 ) {
            results = searchResults;
        }
        return results.map(user => {
            return <User key={`unique-user-key-${user.id}`} id={user.id} />;
        });
    }

}