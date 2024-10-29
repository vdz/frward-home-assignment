import React, { useEffect, useRef, useState } from "react";
import { UserProps } from "./types";
import { deleteUser, updateUser } from "../../store/user/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { DeleteButton, UserEmail, UserName, UserPhone, UserWrapper } from "./UserList.styled";
import { RootState } from "../../store/store";

export const User: React.FC<UserProps> = ({ id }) => {
    const { name, country, email, phone } = useSelector((state: RootState) => state.user.by_id[id]);
    const errors = useSelector((state: RootState) => state.user.errors[id]);
    const hasErrors = errors && Object.values(errors).some((error) => error !== undefined);

    const [fName, setFName] = useState(name || '');
    const [fCountry, setFCountry] = useState(country || '');
    const [fEmail, setFEmail] = useState(email || '');
    const [fPhone, setFPhone] = useState(phone || '');
    
    const inputRef = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();

    const classes = {
        'name-error' : errors?.name ?? '',
        'country-error' : errors?.country ?? '',
        'email-error' : errors?.email ?? '',
        'phone-error' : errors?.phone ?? '',
        'save-block' : hasErrors ? 'disabled' : ''
    }

    useEffect(() => {
        if(inputRef.current && !name) {
            inputRef.current.focus();
        }
    }, [name]);

    return (
        <UserWrapper>
            <UserName value={fName} 
                ref={inputRef}
                className={classes['name-error']}
                placeholder="Israel Israeli" 
                title="click to update"
                onChange={(e) => {
                    setFName(e.target.value);
                }}
                onBlur={() => {
                    dispatch(updateUser({
                        id,
                        name: fName
                    }));
                }} />
                {country}
            <UserEmail value={fEmail} 
                className={classes['email-error']}
                placeholder="israel@israeli.co.il" 
                title="click to update"
                onChange={(e) => {
                    setFEmail(e.target.value);
                }}
                onBlur={() => {
                    dispatch(updateUser({
                        id,
                        email: fEmail
                    }));
                }} />
            <UserPhone value={fPhone} 
                className={classes['phone-error']}
                placeholder="054-1234567" 
                title="click to update"
                onChange={(e) => {
                    setFPhone(e.target.value);
                }}
                onBlur={() => {
                    dispatch(updateUser({
                        id,
                        phone: fPhone
                    }));
                }} />
            <DeleteButton className={classes['save-block']} 
                title="click to immediately delete"
                onClick={() => {
                    dispatch(deleteUser({ id }));
            }} />
        </UserWrapper>
    );
};