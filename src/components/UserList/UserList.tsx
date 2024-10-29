import React from "react";
import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ListWrapper, NewUserButton, Title } from "./UserList.styled";
import { newUser } from "../../store/user/user.actions";
import { User } from "./User";

export const UserList: React.FC = () => {
    const users = useSelector((state: RootState) => state.user.users);
    const dispatch = useDispatch();

    return (
        <ListWrapper>
            <Title>User List ⚜️</Title>
            <NewUserButton onClick={() => {
                dispatch(newUser({
                    id : crypto.randomUUID()
                }));
            }}>+</NewUserButton>
            <Suspense fallback={'Loading...'}>
                {getUserList()}
            </Suspense>
        </ListWrapper>
    );

    function getUserList() {
        if (!users.length) return null;
        return users.map(user => <User key={`unique-user-key-${user.id}`} id={user.id} />);
    }
}