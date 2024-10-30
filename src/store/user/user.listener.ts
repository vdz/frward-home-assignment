import { ListenerEffect } from "@reduxjs/toolkit";
import { newUser, setUserError, updateUser, userCountryValid, userEmailValid, userNameValid, userPhoneValid, validateUserData } from "./user.actions";
import { ErrorType } from "./types";
import { validateCountry, validateEmail, validateName, validatePhone } from "./isValid";


export const userListener = [
    {
        actionCreator: validateUserData,
        effect: (action, listenerApi) => {
            let validationError: ErrorType | null = null;
            const {id, name, email, country, phone } = action.payload;
            // test what is about to be updated, and whether it's valid

            // TODO: export the following inline validations into a function
            // name
            if (name !== undefined) {
                validationError = validateName(action.payload.name);
                if (validationError) {
                    listenerApi.dispatch(setUserError({
                        id, 
                        error: {
                            name: validationError
                        }
                    }));
                    return;
                }
                listenerApi.dispatch(userNameValid({ id }));
            }

            // country
            if (country !== undefined) {
                validationError = validateCountry(country);
                if (validationError) {
                    listenerApi.dispatch(setUserError({
                        id,  
                        error: {
                            country: validationError
                        }
                    }));
                    return; 
                } 
                listenerApi.dispatch(userCountryValid({ id }));
            }

            // email
            if (email !== undefined) {
                validationError = validateEmail(email);
                if (validationError) {
                    listenerApi.dispatch(setUserError({
                        id, 
                        error: {
                            email: validationError
                        }
                    }));
                    return; 
                }
                listenerApi.dispatch(userEmailValid({ id }));
            }

            // phone
            if (phone !== undefined) {
                validationError = validatePhone(phone);
                if (validationError) {
                    listenerApi.dispatch(setUserError({
                        id, 
                        error: { phone: validationError }
                    }));
                    return; 
                }
                listenerApi.dispatch(userPhoneValid({ id }));
            }
        }
    }
]   
