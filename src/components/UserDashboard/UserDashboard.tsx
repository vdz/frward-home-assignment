import React from "react";
import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ListWrapper, Meta, NewUserButton, Title, UserListActions } from "./UserDashboard.styled";
import { newUser } from "../../store/user/user.actions";
import { User } from "./User";
import { ErrorInfo } from "../ErrorInfo/ErrorInfo";
import { Search } from "../Search/Search";
import { Users } from "./UserList";

export const UserDashboard: React.FC = () => {
    const users = useSelector((state: RootState) => state.user.users);
    const dispatch = useDispatch();

    return (
        <ListWrapper>
            <Title>
                ⚜️ User List 
                <Meta>({users.length})</Meta>
            </Title>
            <ErrorInfo />
            <UserListActions>
                <NewUserButton title="Add new user" 
                    onClick={() => {
                        dispatch(newUser({
                        id : crypto.randomUUID()
                    }));
            }}>+</NewUserButton>
            <Search />
            </UserListActions>
            <Suspense fallback={'Loading...'}>
                <Users />
            </Suspense>
        </ListWrapper>
    );
}