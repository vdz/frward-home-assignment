import React, { useEffect, useRef, useState } from "react";
import { UserProps } from "./types";
import { deleteUser, updateUser, validateUserData } from "../../store/user/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { DeleteButton, UpdateButton, UserEmail, UserName, UserPhone, UserWrapper, WrappedAutoComplete } from "./UserDashboard.styled";
import { RootState } from "../../store/store";
import { AutoComplete } from "rsuite";
import countries from '../../data/countries.json';
export const User: React.FC<UserProps> = ({ id }) => {
    const { name, country, email, phone } = useSelector((state: RootState) => state.user.by_id[id]);
    const errors = useSelector((state: RootState) => state.user.errors[id]);

    const [fName, setFName] = useState(name || '');
    const [fCountry, setFCountry] = useState(country || '');
    const [fEmail, setFEmail] = useState(email || '');
    const [fPhone, setFPhone] = useState(phone || '');
    
    const inputRef = useRef<HTMLInputElement>(null);

    const shouldSave = (name !== fName) 
        || (country !== fCountry) 
        || (email !== fEmail) 
        || (phone !== fPhone);
    const hasErrors = errors 
    && Object.values(errors).some((error) => error !== undefined);

    const dispatch = useDispatch();

    const classes = {
        'name-error' : errors?.name ?? '',
        'country-error' : errors?.country ?? '',
        'email-error' : errors?.email ?? '',
        'phone-error' : errors?.phone ?? '',
        'save-block' : hasErrors ? 'disabled' : '',
        'save-enabled' : shouldSave ? 'show' : ''
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
                    dispatch(validateUserData({
                        id,
                        name: fName
                    }));
                }} />
            <WrappedAutoComplete value={fCountry}
                data={countries}
                className={classes['country-error']}
                placeholder="Israel"
                title="click to update"
                onChange={(value) => {
                    setFCountry(value);
                }}
                onExit={() => {
                    dispatch(validateUserData({
                        id,
                        country: fCountry
                    }));
                }} />

            <UserEmail value={fEmail} 
                className={classes['email-error']}
                placeholder="israel@israeli.co.il" 
                title="click to update"
                onChange={(e) => {
                    setFEmail(e.target.value);
                }}
                onBlur={() => {
                    dispatch(validateUserData({
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
                    dispatch(validateUserData({
                        id,
                        phone: fPhone
                    }));
                }} />
            <UpdateButton className={`${classes['save-block']} ${classes['save-enabled']}`} 
                disabled={hasErrors}
                title="click to save"
                onClick={() => {
                        dispatch(updateUser({ 
                            id, 
                            name: fName, 
                            country: fCountry, 
                            email: fEmail, 
                            phone: fPhone 
                        }));
                    }}>
                        Save
            </UpdateButton>
            <DeleteButton
                title="click to immediately delete"
                onClick={() => {
                    dispatch(deleteUser({ id }));
            }} />
        </UserWrapper>
    );
};